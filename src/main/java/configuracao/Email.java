package configuracao;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Email {
	String remetente = "4i4.tecnologia@gmail.com";
	String senha = "cedro@nds";
	Properties props = new Properties();
	Session session;

	public Email() {
		Properties props = new Properties();
		/** Parâmetros de conexão com servidor Gmail */
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.port", "587");

		session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("4i4.tecnologia@gmail.com", "cedro@nds");
			}
		});

		/** Ativa Debug para sessão */
		session.setDebug(true);
	}

	public void enviaEmail(Address[] destinatarios, String assunto, String mensagem) {
		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("4i4.tecnologia@gmail.com")); // Remetente

			message.setRecipients(Message.RecipientType.TO, destinatarios);
			message.setSubject(assunto);// Assunto
			message.setContent(mensagem, "text/html");

			/** Método para enviar a mensagem criada */
			Transport.send(message);

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

}
