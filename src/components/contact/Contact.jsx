import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import ContactData from "./ContactData";
import SendSvg from "../../assets/send.svg";

const Contact = () => {
	const form = useRef();
	const [isPopupVisible, setPopupVisible] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_wwmxiu4",
			"template_pwyhogt",
			form.current,
			"dpjW8kHcbn89D6Spb"
		);

		e.target.reset();
		setPopupVisible(true);

		// Clear the popup after 3 seconds
		setTimeout(() => {
			setPopupVisible(false);
		}, 3000);
	};

	const closePopup = () => {
		setPopupVisible(false);
	};

	return (
		<section className="contact section" id="contact">
			<h2 className="section__title">Get in touch</h2>
			<span className="section__subtitle">Contact Me</span>
			<div className="contact__container container grid">
				<div className="container__content">
					<h3 className="contact__title">Talk to me</h3>
					<div className="contact__info">
						{ContactData.map((contact, id) => (
							<div className="contact__card" key={id}>
								<i className={contact.icon}></i>
								<h3 className="contact__card-title">
									{contact.title}
								</h3>
								<span className="contact__card-data">
									{contact.details}
								</span>
								<a
									href={contact.buttonAddress}
									className="contact__button"
									target="_blank"
									rel="noreferrer">
									{contact.buttonText}
									<i className="bx bx-right-arrow-alt contact__button-icon"></i>
								</a>
							</div>
						))}
					</div>
				</div>
				<div className="container__content">
					<h3 className="contact__title">Write me your project</h3>
					<form
						className="contact__form"
						ref={form}
						onSubmit={sendEmail}>
						<div className="contact__form-div">
							<label className="contact__form-tag">Name</label>
							<input
								type="text"
								name="name"
								className="contact__form-input"
								placeholder="Insert your name"
							/>
						</div>
						<div className="contact__form-div">
							<label className="contact__form-tag">Email</label>
							<input
								type="email"
								name="email"
								className="contact__form-input"
								placeholder="Insert your email"
							/>
						</div>
						<div className="contact__form-div contact__form-area">
							<label className="contact__form-tag">Project</label>
							<textarea
								name="project"
								cols="30"
								rows="10"
								className="contact__form-input"
								placeholder="Write your project"></textarea>
						</div>
						<button className="button button--flex" type="submit">
							Send Message
							<img src={SendSvg} alt="Send" />
						</button>
					</form>
					<div
						className={`popup ${
							isPopupVisible ? "show-popup" : ""
						}`}>
						<span className="popup-close" onClick={closePopup}>
							&times;
						</span>
						<p>Message sent successfully!</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
