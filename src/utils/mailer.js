
// eslint-disable-next-line no-restricted-globals
export const baseURL = location.hostname === 'localhost' ? 'http://localhost:8888/.netlify/functions' : 'https://catalystafrica.netlify.app//.netlify/functions'

export const mailer = async (subject, text) => {
    try {
        await fetch(`${baseURL}/sendMail`, {
            method: 'POST',
            body: JSON.stringify({ subject, text })
        })
    } catch (err) {
        console.error(err)
    }
}