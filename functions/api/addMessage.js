const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { logger } = functions;


exports.addMessage = functions.https.onCall(async (data, context) => {
    try {
        logger.log("Received reuqest message data", data);

        if (!data.text || !data.userId) {
            logger.log("Required fields(text and userId) are missing");

            throw new functions.https.HttpsError(
                "invalid-argument",
                "Required fields(text and userId) are missing",
            );
        }

        //Construct message data
        const { text, userId } = data;
        const messageData = {
            text,
            userId,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        };

        //Add message to users message store in Firestore
        const messageRef = await admin.firestore().collection("chats").doc(userId).collection("messages").add(messageData);

        logger.log("Message successfully added with id", messageRef.id);

        //Return success status and message ID
        return { status: "success", messageId: messageRef.id };
    } catch (error) {
        //Throw succes error to the client
        logger.error("Error adding message", error);
        throw new functions.https.HttpsError(
            "unknown",
            "An error occurred while adding message",
            error.message,
        );
    }
});
