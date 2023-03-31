const nodemailer = require("nodemailer");
const fs = require("fs");

const mailSender = async () => {
  let mails = [
   "luv@shikshalokam.org",
   "info@shikshalokam.org"

  ];

  let mailCount = 0;
  for (let mail of mails) {
    try {
      let transPorter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "jaiprakash18@navgurukul.org",
          pass: "jaiprakash",
        },
      });
      let body = `<p>Hello, Hiring Manager</p>
            <p>
            I am writing to express my interest in the React JS Developer position at your company. I have a passion for developing user-friendly and dynamic web applications, and I believe my skills and experience make me an excellent fit for this role.
            I have several years of experience working with React JS, HTML, CSS, JavaScript, Bootstrap, Material UI, and Redux. I am also proficient in Python, which I have used for back-end development in several projects.
            I have a strong understanding of the principles and practices of building scalable and efficient front-end applications using React JS. My experience working on a variety of projects has honed my skills in creating custom components, integrating third-party libraries, and building modular applications.
            I am confident that my experience, combined with my passion for coding and problem-solving, would make me a valuable addition to your team. I am excited about the opportunity to bring my skills and experience to your company and contribute to the development of innovative web applications.
            Thank you for considering my application. I look forward to the opportunity to discuss my qualifications in further detail.
            <p>I am attaching my resume below.</p>
            <p><b>Regards,</b><br>Jayprakash patel<br>+91-9082100916<br>Personal mail :- jaiprakash18@navgurukul.org</p>`;

      let info = await transPorter.sendMail({
        from: '"Jayprakash patel" <jaiprakash18@navgurukul.org>',
        to: mail,
        subject: "Applying for job Frontent development(React js ).",
        text: "This is mail by me",
        html: body,
        attachments: [
          {
            filename: "Jaypatel.pdf",
            content: fs.createReadStream("./Jaypatel.pdf"),
          },
        ],
      });
      console.log(info);
      mailCount++;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(mailCount, " mail has been sent successfully!");
};
mailSender();
