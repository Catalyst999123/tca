
// eslint-disable-next-line no-restricted-globals
export const baseURL = location.hostname === 'localhost' ? 'http://localhost:8888/.netlify/functions' : `${location.protocol}/${location.host}/.netlify/functions`

export const mailer = async (subject, text) => {
    console.log({ baseURL })
    try {
        await fetch(`${baseURL}/sendMail`, {
            method: 'POST',
            body: JSON.stringify({ subject, text })
        })
    } catch (err) {
        console.error(err)
    }
}