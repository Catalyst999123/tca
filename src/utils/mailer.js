
// eslint-disable-next-line no-restricted-globals
const baseURL = location.hostname === 'localhost' ? 'http://localhost:8888/.netlify/functions/sendMail' : 'https://catalystafrica.netlify.app//.netlify/functions/sendMail'

export const mailer = async (subject, message) => {
    try {
        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({ subject, message })
        })
    } catch (err) {
        console.error(err)
    }
}