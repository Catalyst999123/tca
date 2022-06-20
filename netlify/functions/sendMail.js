import sgMail from '@sendgrid/mail'

// !: don't do it.
sgMail.setApiKey("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");

export const mailer = async (message) => {
    console.log(message);
    try {
        await sgMail.send({
            ...message,
            from: 'bruno@ctrlr.studio',
            to: ['andrew@ctrlr.studio', 'bruno@ctrlr.studio']
        })
    } catch (err) {
        console.log({ err });
    }
}

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
}



