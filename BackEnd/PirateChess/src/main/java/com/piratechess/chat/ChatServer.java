package com.piratechess.chat;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
/**
 * Creates a chat server
 * 
 * @author Colby and Jon
 *
 */
@ServerEndpoint("/chat/{userName}")
@Component
public class ChatServer {
	/**
	 * Function which maps sessions to users
	 */
	private static Map<Session, String> sessionUsersMap = new HashMap<>();
	/**
	 * Function which maps users to session
	 */
	private static Map<String, Session> usersSessionMap = new HashMap<>();

	private final Logger logger = LoggerFactory.getLogger(ChatServer.class);

	/**
	 * User enters chat
	 * 
	 * @param session     - The session of the user who has entered the chat
	 * @param displayName - The of display name the user who wants to chat to
	 *                    others.
	 * @throws IOException
	 */
	@OnOpen
	public void onOpen(Session session, @PathParam("userName") String displayName) throws IOException {
		logger.info("Entered into Open");
		sessionUsersMap.put(session, displayName);
		usersSessionMap.put(displayName, session);
		String message = "User:" + displayName + " has Joined the Chat";
		broadcast(message);
	}

	/**
	 * We are only doing one-on-one conversations for now
	 * @param session
	 * @param message
	 * @throws IOException
	 */
	@OnMessage
	public void onMessage(Session session, String message) throws IOException {
		logger.info("Entered into Message: Got Message:" + message);
		String sendingUser = sessionUsersMap.get(session);
		
		/*
		 * From the client side, just do the following... message = "@" + {receivingUser} + " " + message;
		 * To broadcast to everyone, receivingUser="!all"
		 */
		String receivingUser = message.split(" ")[0].substring(1);
		//if(receivingUser.equals("!all"))
		//{
			//logger.info("Entered into broadcast");
			//broadcast(message);
		//}
		/**
		 * If receivingUser is found, send message to them and to sender
		 */
		if(usersSessionMap.containsKey(receivingUser))//else if
		{
			sendMessageToParticularUser(receivingUser, "[DM] " + sendingUser + ": " + message);
			sendMessageToParticularUser(sendingUser, "[DM] " + sendingUser + ": " + message);
		}
		/**
		 * If receivingUser is blank or not found, send message to all users
		 */
		else
		{
			if(receivingUser == "")
			{
				sendMessageToParticularUser(sendingUser, "User:" + receivingUser + " not found");
			}
			else
			{
				logger.info("Entered into broadcast");
				broadcast(message);
			}
		}
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		logger.info("Entered into Close");
		String net_id = sessionUsersMap.get(session);
		sessionUsersMap.remove(session);
		usersSessionMap.remove(net_id);
		String message = net_id + " disconnected";
		broadcast(message);
	}

	/**
	 * 
	 * @param session   - Session causing the trouble.
	 * @param throwable
	 */
	@OnError
	public void onError(Session session, Throwable throwable) {
		logger.info("Entered into Error");
	}

	/**
	 * Sends a message to a particular user.
	 * 
	 * @param receiver - receiver display name
	 * @param message  - message to be sent to the receiver
	 */
	private void sendMessageToParticularUser(String receiver, String message) {
		try {
			usersSessionMap.get(receiver).getBasicRemote().sendText(message);
		} catch (IOException e) {
			logger.info("Exception: " + e.getMessage().toString());
			e.printStackTrace();
		}
	}

	/**
	 * Sends a message to everyone.
	 * 
	 * @param message - Message to be sent
	 * @throws IOException
	 */
	private static void broadcast(String message) throws IOException {
		/*
		 * From the client side, just do the following... message = "@" +
		 * {!all} + " " + message;
		 */
		sessionUsersMap.forEach((session, user) -> {
			synchronized (session) {
				try {
					session.getBasicRemote().sendText(message);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		});
	}
}
