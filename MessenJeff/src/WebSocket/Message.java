package WebSocket;

import java.util.Date;

public class Message {

	private String message;
	private String sender;
	private String urlImg;
	private Date dtReception;
	
	public String getUrlImg() {
		return urlImg;
	}
	public void setUrlImg(String urlImg) {
		this.urlImg = urlImg;
	}
	
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public Date getDtReception() {
		return dtReception;
	}
	public void setDtReception(Date dtReception) {
		this.dtReception = dtReception;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
