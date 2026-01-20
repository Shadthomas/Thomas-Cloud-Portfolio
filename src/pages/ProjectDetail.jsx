import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    id: "image-labels",
    title: "Image Labels Generator",
    details:
      "This project demonstrates AWS Rekognition's image detection capabilities using CLI tools and S3. It's designed to scan, analyze, and label images for future ML workflows.",
    instructions: [
      "Upload an image to your S3 bucket.",
      "Use AWS CLI to trigger Rekognition and analyze the image.",
      "Fetch and display labels using Python or CLI.",
      "Ensure correct IAM roles are attached for Rekognition access.",
    ],
    diagram: "/image-labels.png",
    diagramCaption: "AWS Rekognition flow using S3, IAM, and CLI with Python",
    diagramNotes: [
      "3.2A Create S3 bucket and upload images",
      "Create an Amazon S3 Bucket",
      "1. Log in to your AWS Management Console.",
      "2. Navigate to the Amazon S3 service from the search bar. An S3 bucket is like a virtual storage box in the cloud where you can keep your files safe and easily accessible with permissions.",
      {
        type: "image",
        src: "/images/aws-s3-recently-visited.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: "Screenshot showing navigation to S3 in the AWS Console"
      },
      "3. Click on ‘Create Bucket’.",
      "4. Choose a unique name for your bucket and select the region the want the storage bucket.",
      {
        type: "image",
        src: "/images/general-config.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "5. Leave the default settings for the rest of the options and click ‘Create Bucket’.",
      "6. We will use this bucket to store the images on which labels are to be generated. Let’s go ahead and upload some images in the S3 bucket.",
      "Create an Amazon S3 Bucket",
      "1. Once the bucket is created, navigate to the bucket.",
      "2. Click on the ‘Upload’ button and select the images you want to analyse from your system.",
      {
        type: "image",
        src: "/images/upload-page.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "3. Click on Upload. Your image has now been uploaded in the S3 bucket.",
      {
        type: "image",
        src: "/images/upload-object.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "4. We will use these images for labelling so try to upload some images that have multiple objects present to see the accuracy of the model when multiple labels are present. For example : A busy city street.",
      "Let’s move forward to the next section, where we will install and configure the AWS CLI.",
      "3.2B Install and configure AWS CLI",
      "Installing the AWS Command line interface(CLI)",
      "The AWS CLI is used to interact with various AWS services from the command line. To install AWS CLI:",
      "1. Open your terminal or command prompt.",
      "2. Run the command appropriate for your operating system to install the AWS CLI.",
      {
        type: "image",
        src: "/images/CLI-options.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "To check if the AWS CLI (Command Line Interface) was installed successfully on your system, you can run the following command in your terminal or command prompt:",
      "aws --version",
      "Note: Restart your terminal if it is giving not installed error",
      "You have successfully installed the CLI. Next, we need to configure the CLI with the appropriate user keys to get started with using AWS services.",
      "Configure AWS CLI",
      "1. To configure your AWS CLI, run the following command in your terminal: aws configure",
      "2. Running this command will ask for a access key and secret access key. What are these? To access your AWS account from CLI, you need to set up a user account associated with it and these keys are used for the authentication for accessing the AWS services.",
      "3. Login to your AWS Management console and search for IAM in the search bar.",
      "4. Navigate to Users and click on Create User.",
      "5. Give an appropriate user name and click Next.",
      {
        type: "image",
        src: "/images/specify-user-details.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "6. For the Permission options, choose the option ‘Attach policies directly’ and attach the ‘AdministratorAccess’ policy. (Be careful while using the Administrator Access policy as we get the full access to the AWS services and is generally not recommended if the user will be accessed by someone else).",
      {
        type: "image",
        src: "/images/set-permissions.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "7. Click on Next and Create User.",
      "8. Navigate to the user you created, and click on create Access key under the Access Keys option.",
      {
        type: "image",
        src: "/images/aws-cli-user.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "9. Choose the Command Line Interface(CLI) as the use case, check the confirmation box and click Next,",
      "10. Provide a suitable description about purpose of the Access key and Create Access Key.",
      "11. You will be provided with an Access key and a Secret Access Key. These keys can be used to access your AWS services so make sure these are kept confidential.",
      "12. Some best practices while using Access Keys:",
      "- Never store your access key in plain text, in a code repository, or in code",
      "- Disable or delete access key when no longer needed.",
      "- Enable least-privilege permissions.",
      "- Rotate access keys regularly.",
      "13. Go back to your terminal or command prompt and paste the keys that you just generated.",
      "14. Choose the region (Make sure the CLI default region and the S3 bucket region are the same",
      "15. The general flow of the command line would look like:",
      {
        type: "image",
        src: "/images/key-access.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "We have configured our AWS CLI. For our next steps, we will write the python code for extracting pictures from S3 bucket and applying detect_labels operation from Rekognition to generate the labels with their confidence score. ",
      "3.2C Import Libraries",
      "Importing Libraries",
      "1. Open your preferred IDE(VSCode etc.) to and create a .py file for performing your coding.",
      "2. Open a terminal and install the libraries needed for this project.",
      "pip install boto3",
      "pip install matplotlib",
      "3. Let's import the necessary libraries. We need:",
      "boto3 for interacting with AWS services.",
      "matplotlib for visualization.",
      "PIL (Python Imaging Library) for handling image data.",
      "BytesIO from the io module to work with image data.",
      "4. Add the below code in your .py file.",
      {
        type: "image",
        src: "/images/import-libraries.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "3.2D Define Functions",
      "detect_labels function",
      "Now, let's define a function called detect_labels. This function takes a photo and bucket name as input parameters. Within the function:",
      "We create a Rekognition client using boto3.",
      "We use the detect_labels method of the Rekognition client to detect labels in the given photo.",
      "We print the detected labels along with their confidence levels.",
      "We load the image from the S3 bucket using boto3 and PIL.",
      "We use matplotlib to display the image and draw bounding boxes around the detected objects.",
      {
        type: "image",
        src: "/images/functions.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "main function",
      "Next, let's write a main function to test our detect_labels function. We specify a sample photo and bucket name, then call the detect_labels function with these parameters.",
      "(Remember to change your ‘image_file_name’ and ‘bucket_name’ to your actual configured naming.)",
      {
        type: "image",
        src: "/images/main-function.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "3.2E Final Code",
      "After performing all the previous steps, your final code should look like this:",
      "Note: Remember to change your ‘image_file_name’ and ‘bucket_name’ to your actual configured naming.",
      {
        type: "image",
        src: "/images/full-image-code.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "3.2F Running your Project",
      "1. Open the terminal in the directory where your Python file is present and run the command: python name_of_python_file.py",
      "2. You will get an output with 10 detected labels and their confidence levels and a pop-up screen displaying the image that was uploaded on your S3 bucket with the bounding boxes present on the generated labels.",
      "3.3 Conclusion & Clean-up",
      "Congratulations on completing the Image Label Generator project using AWS Rekognition. You've done an excellent job.",
      "Clean-up",
      "Login to the AWS Management Console and go to S3 using the search bar. Select the S3 bucket created for this project and choose the ‘Delete’ option located in the top right corner of the general-purpose buckets section.",
      "Next, navigate to Lambda from the search bar. Select the Lambda function created for this project and go to ‘Actions’ → ‘Delete’ option available in the top right corner.",
      "Lastly, navigate to IAM from the search bar. Select the User created to grant CLI access and choose the ‘Delete’ option provided in the top right corner."
    ],
    github: "https://github.com/yourusername/aws-3tier-app",
    demo: null,
    tech: ["S3", "IAM", "CLI", "Rekognition"],
  },
  {
    id: "text-narrator",
    title: "Amazon Polly Text Narrator",
    description: "Text-to-speech pipeline using Lambda, Polly, and S3.",
    details:
      "This project converts text-based content like articles and books into audio using Amazon Polly. It uses a Lambda function to retrieve and process text, Polly to synthesize speech, and stores the result in S3. The output is downloadable and usable across platforms.",
    instructions: [
      "Upload a text file to an S3 bucket.",
      "Trigger a Lambda function that sends the text to Amazon Polly.",
      "Polly converts the text to audio using a selected voice and language.",
      "The resulting MP3 file is saved back to the S3 bucket and made downloadable."
    ],
    diagram: "/text-narrator-diagram.jpeg",
    diagramCaption: "Text Narrator architecture with Amazon Polly, Lambda, and S3.",
    diagramNotes: [
      "What is Amazon Polly?",
      "1. Amazon Polly is a service provided by AWS that enables developers to generate human-like speech from text.",
      "2. Realistic Speech: The speech created by Amazon Polly sounds like a real person speaking, not robotic or unnatural. It's great for making computerized voices sound more human-like.",
      "3. Options to Customize: You can change how the speech sounds. For example, you can make it faster or slower, adjust the pitch (high or low), and even pick different accents or languages.",
      "4. Supports Many Languages and Voices: Amazon Polly can speak in lots of different languages and with different voices. Whether you want a man or a woman, or someone with a British or American accent, you have options.",
      "5. SSML Support for Control: You can use special codes called SSML to control exactly how the speech sounds. This allows for things like emphasizing certain words, adding pauses, or changing the tone of voice.",
      "This setup is ideal for content accessibility, audio blogs, or automated newsletter narration.",
      "Trying out Amazon Polly",
      "1. Login to your AWS management console and search for Amazon Polly on the search bar.",
      {
        type: "image",
        src: "/images/polly.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      {
        type: "image",
        src: "/images/text-as-speech.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "2. Amazon Polly provides different engines according to the requirements for the sounding of the audio and the content length.To explain it in easy terms:",
      "- Neural Engine: Used for lifelike and expressive speech or for natural-sounding interactions.",
      "- Standard Engine: Provides good quality speech suitable for most applications.",
      "- Long Form Engine: Optimized for longer texts like articles or books that provides a good quality throughout the content.",
      "3. Amazon Polly also provides different languages to translate and different voice tones. So you can use a voice tone according to the need in your application.",
      {
        type: "image",
        src: "/images/language.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      {
        type: "image",
        src: "/images/voice.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "4. Choose the language and voice model, type the content you want to be translated in the audio form in the input text box.",
      "5. You can listen to the output using the Listen button present on the top right or you can even download the audio or save it in a S3 bucket.",
      "We have seen a quick demo on how Amazon Polly works. In the next few sections we will explore on how to call the Polly service using a serverless function.",
      "4.3A Create an IAM role",
      "Creating an IAM role",
      "1. In this project, we will try to access the Amazon Polly service and store the audio output in a S3 bucket using a Lambda function.",
      "2. For that we need an IAM role with suitable policies attached to it.",
      "3. From your AWS management console, search for IAM from the search bar.",
      "4. Navigate to Access Management → Roles → Create Role.",
      "5. Select AWS service as the trusted entity type and Lambda as your use case. Click on Next.",
      "6. From the list of permission policies, choose the following policies :",
      "a. AmazonPollyFullAccess",
      "b. AmazonS3FullAccess",
      "c. AWSLambdaBasicExecutionRole",
      "7. Click on Next.",
      "8. Provide a suitable name and description for the IAM role and click on Create role.",
      {
        type: "image",
        src: "/images/role-details.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "Creating a S3 bucket",
      "1. From your AWS management console, search for S3 from the search bar.",
      "2. Click on Create bucket.",
      {
        type: "image",
        src: "/images/s3-intro.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "3. Give a suitable name for the S3 bucket, keep the rest of the configurations as it is and click on Create bucket.",
      {
        type: "image",
        src: "/images/general-config-2.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "4. The audio files from generated by Amazon Polly would be stored in this bucket with the help of AWS Lambda.",
      "Great work keeping up so far! In the next step we will create a Lambda function through which we will access the Amazon Polly service and store the audio output in the created S3 bucket.",
      "4.3C Create a Lambda function",
      "Creating a Lambda function",
      "1.  From your AWS management console, navigate to Lambda from the search bar.",
      {
        type: "image",
        src: "/images/lambda.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "2. Click on Create function.",
      "3. Give an appropriate name to the Lambda function and choose Node.js 16.x as the runtime environment.",
      "4. Toggle the option ‘Change default configuration role’ and check ‘Use existing role’.",
      "5. Choose the role that you created earlier, leave the rest of configurations as default and click Next.",
      {
        type: "image",
        src: "/images/lambda-info.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "6. Rename your ‘index.mjs’ file to ‘index.js’.",
      "7. We're using Amazon's tools (AWS SDK) to talk to two services: Polly (for making speech from text) and S3 (for storing files).",
      {
        type: "image",
        src: "/images/lambda-function-1.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "8. We're writing a function that AWS will run for us whenever something happens. It's like a little program that waits for a signal to start working.",
      {
        type: "image",
        src: "/images/lambda-function-2.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "9.  When the function gets a message with some text, we're going to make it into speech. We decide how the speech will sound and what format it should be in ",
      {
        type: "image",
        src: "/images/lambda-function-3.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "10. We send the text to Polly and ask it to turn it into speech. Polly does its magic and gives us back the speech as data.",
      "11. We then save this speech in our S3 storage.",
      {
        type: "image",
        src: "/images/lambda-function-4.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "12. We make a message saying the speech has been saved successfully with its special name in our storage. If something goes wrong, there is an error message.",
      {
        type: "image",
        src: "/images/lambda-function-5.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "Complete Lambda Function",
      "Your complete Lambda function code will look like this.",
      {
        type: "image",
        src: "/images/lambda-function-6.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "14. Deploy the code changes by clicking on Deploy.",
      "Checking the Output",
      "We have completed with the code configuration of the Lambda function, let’s test the function out by creating a test event.",
      "1. Click on Test and configure a test event for your Lambda function.",
      "2. Provide a name for your test configuration and in the Event JSON, provide the text you want to be converted to audio in the form:",
      {
        type: "image",
        src: "/images/lambda-function-7.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "3. Leave the rest of configurations as default and click ‘Save’.",
      "4. Click on Test button again to invoke the test event.",
      "5. Check the output.",
      {
        type: "image",
        src: "/images/audio-output.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "6. You can access the audio file by checking it in the previously created S3 bucket and downloading it.",
      {
        type: "image",
        src: "/images/polly-audio-storage.png",
        alt: "AWS Console S3 Navigation Screenshot",
        caption: " REMEMBER!!!!!! Choose a unique name for your bucket and select the region the want the storage bucket."
      },
      "Congrats! You have successfully completed the project of text to speech translation using Amazon Polly, Lambda and S3 bucket.",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    github: "https://github.com/yourusername/cloud-security-dashboard",
    demo: null,
    tech: ["Amazon Polly", "Lambda", "S3", "IAM"]
  },
  {
    id: "event-announcer",
    title: "Event Announcement System",
    details:
      "This app develops an event announcement website that allows users to subscribe to event notifications via email, view a list of events and reate new events through a form.",
    instructions: [
      "Set up frontend hosting with S3",
      "Integrate SNS Notifications and Lambda Functions",
      "Setup, Test and Deploy the API Gateway",
      "Test and Finalize",
    ],
    diagram: "/event-announcer.png",
    diagramCaption: "Event Announcement App AWS Diagram",
    diagramNotes: [
      "Create the Website Frontend Files",
      "This step involves creating and hosting the frontend for the event announcements project using S3 static website hosting. You can download the pre-built files",
      "1) Access the Repository (Open the following GitHub link in your browser)",
      "2) Clone or Download the Repository",
      "On the repository page:",
      "If you are familiar with Git",
      "Click on the Code button (green button).",
      "Copy the repository URL (HTTPS is recommended).",
      "Open your terminal or command prompt and run: git clone https://github.com/techwithlucy/ztc-projects-intermediate.git",
      "Navigate to the cloned directory:",
      "cd projects",
      "cd intermediate",
      "cd project1",
      "If you are not familiar with Git:",
      "Click on the Code buton.",
      "Select Download ZIP to download the repository as a ZIP file.",
      "Extract the ZIP file to your local machine.",
      "3) Locate the Required Files",
      "Inside the downloaded repository, locate the files:",
      "index.html",
      "styles.css",
      "events.json",
      "Keep these files ready for uploading to the S3 bucket.",
      "Overview of the Frontend Code",
      "The frontend consists of three main files:",
      "1) index.html: Provides the structure and content of the website.",
      "Displays the list of events from events.json.",
      "Contains a form to create new events.",
      "Includes a (Subscribe) button to collect user email addresses for notifications.",
      "2) styles.css: Handles the visual appearance and layout.",
      "3) events.json: A JSON file that stores event data, including the event title, date, and description.",
      "Below is a brief explanation of what the main components in index.html do.",
      "Header Section:",
      "Contains the project title and a (Subscribe to Events) button.",
      "The subscribeToEvents() function is triggered when the button is clicked.",
      "Events Section:",
      "Displays the latest events stored in events.json.",
      "Each event includes a title, date, and description.",
      "A button to show the (Create Event) form is available.",
      "Create Event Form:",
      "Allows users to add a new event with a title, date, and description.",
      "The form uses the submitNewEvent(event) function to send the data to the backend API.",
      "JavaScript Code:",
      "loadEvents(): Fetches and displays events from events.json.",
      "subscribeToEvents(): Sends user email to the backend for notifications via SNS.",
      "submitNewEvent(event): Sends new event details to the backend API for saving to events.json.",
    ],
    github: "https://github.com/yourusername/aws-3tier-app",
    demo: null,
    tech: ["S3", "SNS", "LAMBDA", "API", "IAM"],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  if (!project) {
    return (
      <PageWrapper>
        <p className="text-red-400 text-xl">Project not found.</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="space-y-6">
        {/* Back Button */}
        <motion.div
          whileHover={{ scale: 1.05, x: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Title & Description */}
        <h2 className="text-4xl font-bold text-white">{project.title}</h2>
        <p className="text-lg text-gray-300">{project.description}</p>

        {/* Details */}
        {project.details && (
          <p className="text-base text-gray-400 mt-2 leading-relaxed">
            {project.details}
          </p>
        )}

        {/* Custom Sentences for Image Labels Generator */}
        {project.id === "image-labels" && (
          <>
            <p className="text-gray-400 mt-4">
              This tool is designed for future integration into an image moderation pipeline.
            </p>
            <p className="text-gray-400">
              It currently relies on CLI-based workflows, but future iterations will support Lambda automation and frontend display.
            </p>
          </>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-cyan-700 text-white text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Instructions (if available) */}
        {project.instructions && project.instructions.length > 0 && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-white mb-2">Instructions</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Diagram */}
        {project.diagram && (
          <div className="mt-6">
            <img
              src={project.diagram}
              alt={`${project.title} Diagram`}
              className="rounded-lg border border-cyan-700 shadow-lg"
            />
            {project.diagramCaption && (
              <p className="mt-2 text-sm text-center text-gray-400">
                {project.diagramCaption}
              </p>
            )}

            {/* Collapsible "More Info" Section */}
            {project.diagramNotes && (
              <div className="mt-4">
                <button
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                  className="text-cyan-400 hover:text-cyan-300 underline text-sm transition"
                >
                  {showMoreInfo ? "HIDE INSTRUCTIONS" : "CLICK HERE FOR FULL INSTRUCTIONS"}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: showMoreInfo ? "auto" : 0, opacity: showMoreInfo ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-2 space-y-2"
                >
                  {project.diagramNotes.map((note, idx) => {
                    if (typeof note === "string") {
                      return (
                        <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                          {note}
                        </p>
                      );
                    } else if (note.type === "image") {
                      return (
                        <div key={idx} className="my-4 text-center">
                          <img
                            src={note.src}
                            alt={note.alt}
                            className="rounded-lg border border-cyan-700 shadow-md mx-auto max-w-full"
                          />
                          <p className="text-gray-400 text-xs italic mt-2">{note.caption}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </motion.div>
              </div>
            )}
          </div>
        )}

        {/* External Links */}
        <div className="flex gap-6 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-2"
            >
              <FaGithub /> View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
