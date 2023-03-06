import React from "react";
import { questions } from "../assets/data";

const Questions = (): JSX.Element => {
	const [toggleContent, setToggleContent] = React.useState(false);
	const [et, setEt] = React.useState("");
	const accordionItems = document.querySelectorAll(".questions__item");
	accordionItems.forEach((item) => {
		const accordionHeader = item.querySelector(".questions__header");

		accordionHeader?.addEventListener("click", () => {
			const openItem = document.querySelector(".accordion-open");

			toggleItem(item);

			if (openItem && openItem !== item) {
				toggleItem(openItem);
			}
		});
	});
	const accordionContent = document.querySelector(".questions__content");
	const csd = accordionContent?.classList.contains("accordion-open");
	if (csd) {
		accordionContent?.removeAttribute("style");
	} else {
		setEt(accordionContent?.scrollHeight + "px");
	}

	const toggleItem = (item: any) => {
		const accordionContent = item.querySelector(".questions__content");

		if (item.classList.contains("accordion-open")) {
			accordionContent.removeAttribute("style");
			item.classList.remove("accordion-open");
		} else {
			accordionContent.style.height =
				accordionContent.scrollHeight + "px";
			item.classList.add("accordion-open");
		}
	};

	return (
		<section className="questions section" id="faqs">
			<h2 className="section__title-center questions__title container">
				Some common questions <br /> were often asked
			</h2>

			<div className="questions__container container grid">
				<div className="questions__group">
					<div className="questions__item">
						<div
							className={
								toggleContent
									? "questions__header"
									: "questions__header accordion-open"
							}
							onClick={() =>
								setToggleContent((prev): boolean => !prev)
							}
						>
							<i className="ri-add-line questions__icon"></i>
							<h3 className="questions__item-title">jsjioj</h3>
						</div>

						<div
							className={
								toggleContent
									? "questions__content"
									: "questions__content  accordion-open"
							}
							style={{ height: "100px" }}
						>
							<p className="questions__description">siojoi</p>
						</div>
					</div>
					{questions.questions1.map((question, index) => (
						<div className="questions__item" key={index}>
							<div
								className={
									toggleContent
										? "questions__header"
										: "questions__header accordion-open"
								}
								onClick={() =>
									setToggleContent((prev): boolean => !prev)
								}
							>
								<i className="ri-add-line questions__icon"></i>
								<h3 className="questions__item-title">
									{question.title}
								</h3>
							</div>

							<div
								className={
									toggleContent
										? "questions__content"
										: "questions__content  accordion-open"
								}
								style={{ height: "100px" }}
							>
								<p className="questions__description">
									{question.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="questions__group">
					{questions.questions2.map((question, index) => (
						<div className="questions__item" key={index}>
							<div
								className="questions__header"
								onClick={() =>
									setToggleContent((prev): any => !prev)
								}
							>
								<i className="ri-add-line questions__icon"></i>
								<h3 className="questions__item-title">
									{question.title}
								</h3>
							</div>

							<div
								className={
									toggleContent
										? "questions__content accordion-open"
										: "questions__content"
								}
							>
								<p className="questions__description">
									{question.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Questions;
