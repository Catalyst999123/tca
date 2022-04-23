import React, { useEffect } from "react"
import styled from 'styled-components'
import media from "../../styles/media";
import Footer from "../footer";

const InfoCon = styled.div`
  margin: 150px 20px 150px;
  color: #000;
  h2 {
    margin: 50px 0 30px;
  }
  span {
    color: var(--dark-blue);
    font-size: 25px;
    line-height: 35px;
    
  }
  a {
    color: #000;
    text-decoration: none;
  }

  .heading2 {
    font-size: 30px;
    line-height: 36px;
  }

  .note {
    border: 1px solid black;
    font-weight: bold;
    color: black;
    padding: 20px 15px;
  }

  table {
    width: 100%;
    tr {
      td {
        width: 33%;
        padding-bottom: 20px;
        vertical-align: top;
        &.top {
          font-weight: bold;
          color: black;
        }
        ol {
          margin: 0;
          padding: 0;
        }
      }
    }

    &.two {
      border: 1px solid #000;
      border-collapse: collapse;

      tr {
        td {
          border: 1px solid #000;
          &.first {
            width: 25%;
          }
        }
      }
    }
  }
  ${media.laptop`
    margin: 100px 16vw 200px;
    font-size: 20px;
    line-height: 28px;

    span {
      font-size: 25px;
      line-height: 35px;
    }

    ul {
      margin-left: -20px;
    }

    .heading2 {
      font-size: 36px;
      line-height: 36px;
    }
  `}
`

function Info() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <InfoCon>
      <p>
      The Protection of Personal Information Act, 2013 (“POPI”) came into complete commencement on 1 July 2021, in this regard we have a number of obligations and duties in terms of POPI that we must comply with. The protection of your personal information is a high priority for us and we have taken steps to ensure that your personal information is protected and remains private. 
      <br/><br/>
      In addition to this document serving as our privacy policy, this document will also serve as our data subject notification as contemplated in section 18 of POPI. In this regard, this document will inform you of what personal information we collect, why we collect it, how we use it and what safety measures are in place to protect it. <br/>
      Where we refer to “process”, it means how we collect, use, store, make available, destroy, update, disclose, or otherwise deal with your personal information. As a general rule we will only process your personal information if this is required to deliver or offer a service, provide a product or carry out a transaction.<br/>
      We may combine your personal information and use the combined personal information for any of the purposes stated in this Privacy Policy.<br/>
      In this document any reference to “we” or “us” or “our” is reference to The Catalyst Africa (Pty) Ltd, also referred to as Catalyst.<br/>
      If you use our services, goods and/or products, you agree that we may process your personal information as explained under this Privacy Policy. <br/>
      We may change this Privacy Policy from time to time if the law or our business practices requires it.<br/>
      The version of the Privacy Policy displayed on our website at the time of your interaction with us will be applicable. 
      </p>

      <br/><br/>

      <span>What is personal information?</span>
      <p>Personal information refers to any information that identifies you or specifically relates to you.<br/>
       Personal information includes, but is not limited to, the following information about you:</p>
      <br/><br/>
      <table>
        <tbody>
          <tr>
            <td>Age</td>
            <td>Financial history</td>
            <td>Personal views</td>
          </tr>
          <tr>
            <td>Belief</td>
            <td>Gender</td>
            <td>Physical address</td>
          </tr>
          <tr>
            <td>Birth</td>
            <td>Identity number</td>
            <td>Physical health</td>
          </tr>
          <tr>
            <td>Biometric</td>
            <td>Language </td>
            <td>Pregnancy</td>
          </tr>
          <tr>
            <td>Colour</td>
            <td>Location information</td>
            <td>Race</td>
          </tr>
          <tr>
            <td>Conscience</td>
            <td>Marital Status </td>
            <td>Religion</td>
          </tr>
          <tr>
            <td>Correspondence</td>
            <td>Mental Health</td>
            <td>Sex</td>
          </tr>
          <tr>
            <td>Criminal history</td>
            <td>Medical history</td>
            <td>Sexual orientation</td>
          </tr>
          <tr>
            <td>Culture</td>
            <td>Name</td>
            <td>Social origin</td>
          </tr>
          <tr>
            <td>Disability</td>
            <td>National Origin</td>
            <td>Symbol</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>Online identifier</td>
            <td>Telephone number</td>
          </tr>
          <tr>
            <td>E-mail address</td>
            <td>Other particular assignment</td>
            <td>Well being</td>
          </tr>
          <tr>
            <td>Employment history </td>
            <td>Personal opinions</td>
            <td></td>
          </tr>
          <tr>
            <td>Ethnic origin</td>
            <td>Personal preferences</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br/><br/>

      <span>Is the supply of the personal information voluntary or mandatory?</span>
      <p>
        The supply of certain personal information is mandatory, meaning we have to collect this personal information from you by law. If you do not supply this information, we cannot comply with our legal obligations. In this regard, if you do not supply this personal information we cannot do business with you. We collect personal information as is required by the following legislation:
      </p>
      <p>
      Basic Conditions of Employment Act, No 75 of 1997<br/>
      Continuing Education and Training Act (previously known as Further Education and Training Colleges Act) 16 of 2006<br/>
      Compensation for Occupational Injuries and Diseases Act, No. 130 of 1993<br/>
      Credit Agreement Act, No. 75 of 1980<br/>
      The Criminal Procedure Act, No. 51 of 1977<br/>
      Debt Collectors Act, No. 114 of 1998<br/>
      Employment Equity Act, No. 55 of 1998<br/>
      Financial Intelligence Centre Act, No. 38 of 2001<br/>
      Higher Education Act 101 of 1997<br/>
      Income Tax Act 58 of 1962<br/>
      Labour Relations Act, No 66 of 1995<br/>
      National Credit Act, No. 34 of 2005<br/>
      NQF Act No 67 of 2008<br/>
      Pension Funds Act, No. 24 of 1956<br/>
      Skills Development Act 97 of 1998<br/>
      Unemployment Insurance Act, No. 63 of 2001<br/>
      Financial Advisory and Intermediary Service Act, No. 37 of 2002<br/>
      Occupational Health and Safety Act No. 85 of 1993<br/>
      Prevention of Organised Crime Act No. 121 of 1998
      </p>
      <br/><br/>

      <p>In other instances the supply of personal information is voluntary, which means there is no law imposed on us to collect this personal information. Even though there is no law that imposes the collection of the personal information, we require the personal information to deliver the products and/or services to you. In this regard, if you do not supply the personal information, we cannot do business with you.</p>
      <br/><br/>

      <span>When will we process your personal information?</span>
      <p>
        We will only process your personal information for lawful purposes relating to our business if the following applies:
        {/* <br/><br/> */}
        <ul>
          <li>if you have consented thereto.</li>
          <li>if a person legally authorised by you, the law, or a court, has consented thereto.</li>
          <li>if it is necessary to conclude or perform under a contract, we have with you.</li>
          <li>if the law requires or permits it.</li>
          <li>if it is required to protect or pursue your, our or a third party’s legitimate interest.</li>
        </ul>
      </p>
      <br/><br/>

      <span>What is special personal information?</span>
      <p>
        Special personal information is personal information about the following:
      </p>
      <table>
        <tbody>
          <tr>
            <td>Biometric information</td>
            <td>Philosophical beliefs</td>
            <td>Sex life</td>
          </tr>
          <tr>
            <td>Criminal behaviour </td>
            <td>Political persuasion</td>
            <td>Trade union membership</td>
          </tr>
          <tr>
            <td>Ethnic origin</td>
            <td>Race</td>
            <td></td>
          </tr>
          <tr>
            <td>Health</td>
            <td>Religious beliefs</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>

      <span>When will we process your special personal information?</span>
      <p>
        We may process your special personal information in the following circumstances:
        <ul>
          <li>if you have consented to the processing.</li>
          <li>if the information is being used for any Human resource or payroll requirement.</li>
          <li>if the processing is needed to create, use, or protect a right or obligation in law.</li>
          <li>if the processing is for statistical or research purposes and all legal conditions are met.</li>
          <li>if the special personal information was made public by you.</li>
          <li>if the processing is required by law.</li>
          <li>if racial information is processed, and the processing is required to identify you; and / or if health information is processed, and the processing is to determine your insurance risk, or to comply with an insurance policy or to enforce an insurance right or obligation.</li>
        </ul>
      </p>
      <br/>
      <br/>

      <span>When and from where we obtain personal information about you?</span>
      <p>
        We may collect personal information about you from the following sources:
        <ul>
          <li>We may collect personal information directly from you.</li>
          <li>We may collect personal information from a public record.</li>
          <li>We may collect personal information from an area where you have deliberately made it public.</li>
          <li>We may collect information about you based on your use of our products, services, or service channels. </li>
          <li>We may collect information about you based on how you engage or interact with us such as via our support desk, emails, letters, telephone calls and surveys.</li>
          <li>We may collect personal information from a third party.</li>
          <li>We may collect personal information from another source if you give us consent to do so. </li>
        </ul>
        If the law requires us to do so, we will ask for your consent before collecting personal information about you from third parties.
      </p>
      <br/>
      <br/>

      <p>
        The third parties from whom we may collect your personal information include, but are not limited to, the following:
        <ul>
          <li>Partners of our company for any of the purposes identified in this Privacy Policy.</li>
          <li>your spouse, dependents, partners, employer, and other similar sources.</li>
          <li>attorneys, tracing agents, debt collectors and other persons that assist with the enforcement of agreements.</li>
          <li>payment processing services providers, merchants, banks, and other persons that assist with the processing of your payment instructions, like EFT transaction partners.</li>
          <li>insurers, brokers, other financial institutions, or other organisations that assist with insurance and assurance underwriting, the providing of insurance and assurance policies and products, the assessment of insurance and assurance claims and other related purposes.</li>
          <li>law enforcement and fraud prevention agencies and other persons tasked with the prevention and prosecution of crime;</li>
          <li>regulatory authorities, industry ombudsman, governmental departments, local and international tax authorities.</li>
          <li>trustees, Executors or Curators appointed by a court of law.</li>
          <li>our service providers, agents and sub-contractors like couriers and other persons we use to offer and provide products and services to you.</li>
          <li>courts of law or tribunals.</li>
        </ul>
      </p>
      <br/>
      <br/>

      <span>Reasons we need to process your personal information.</span>
      <p>
        We will process your personal information for the following reasons:
        <ul>
          <li>to provide you with products, goods, and services. </li>
          <li>to market our products, goods, and services to you.</li>
          <li>to respond to your enquiries and complaints.</li>
          <li>to comply with legislative, regulatory, risk and compliance requirements (including directives, sanctions, and rules), voluntary and involuntary codes of conduct and industry agreements or to fulfil reporting requirements and information requests.</li>
          <li>to conduct market and behavioural research, including scoring and analysis to determine if you qualify for products and services or to determine your credit or insurance risk.</li>
          <li>to develop, test and improve products and services for you.</li>
          <li>for historical, statistical and research purposes, like market segmentation.</li>
          <li>to process payment instruments.</li>
          <li>to create, manufacture and print payment issues (like a payslip)</li>
          <li>to enable us to deliver goods, documents, or notices to you.</li>
          <li>for security, identity verification and to check the accuracy of your personal information.</li>
          <li>to communicate with you and carry out your instructions and requests.</li>
          <li>for customer satisfaction surveys, promotional offerings.</li>
          <li>insurance and assurance underwriting and administration.</li>
          <li>to process or consider or assess insurance or assurance claims.</li>
          <li>to provide insurance and assurance policies and products and related services.</li>
          <li>to enable you to take part in customer loyalty reward programmes, to determine your qualification for participation, earning of reward points, determining your rewards level, monitoring your buying behaviour with our rewards partners to allocate the correct points or inform you of appropriate products, goods, and services you may be interested in or to inform our reward partners about your purchasing behaviour.</li>
          <li>to enable you to take part in and make use of value-added products and services.</li>
          <li>to assess our lending and insurance risks; and / or</li>
          <li>for any other related purposes.</li>
        </ul>
      </p>
      <br/>
      <br/>

      <span>How we use your personal information for marketing</span>
      <p>
        <ul>
          <li>We will use your personal information to our products and services to you.</li>
          <li>We will do this in person, by post, telephone, or electronic channels such as SMS, email, and fax.</li>
          <li>If you are not our customer, or in any other instances where the law requires, we will only market to you by electronic communications with your consent.</li>
          <li>In all cases you can request us to stop sending marketing communications to you at any time.</li>
        </ul>
      </p>
      <br/>
      <br/>

      <span>When how and with whom we share your personal information?</span>
      <p>
        In general, we will only share your personal information if any one or more of the following apply:
        <ul>
          <li>if you have consented to this.</li>
          <li>if it is necessary to conclude or perform under a contract, we have with you;</li>
          <li>if the law requires it; and / or</li>
          <li>if it’s necessary to protect or pursue your, our or a third party’s legitimate interest.</li>
        </ul>
      </p>
      <br/>
      <br/>

      <span>Under what circumstances will we transfer your information to other countries?</span>
      <p>
        We will only transfer your personal information to third parties in another country in any one or more of the following circumstances:
        <ul>
          <li>where your personal information will be adequately protected under the other country’s laws or an agreement with the third-party recipient.</li>
          <li>where the transfer is necessary to enter into or perform under a contract with you, or a contract with a third party that is in your interest.</li>
          <li>where you have consented to the transfer; and / or</li>
          <li>where it is not reasonably practical to obtain your consent, the transfer is in your interest.</li>
        </ul>
        This transfer will happen within the requirements and safeguards of the law. Where possible, the party processing your personal information in the other country will agree to apply the same level of protection as available by law in your country or if the other country’s laws provide better protection the other country’s laws would be agreed to and applied.
      </p>
      <br/>
      <br/>

      <span>How we secure your personal information</span>
      <p>
        <ul>
          <li>We will take appropriate and reasonable technical and organisational steps to protect your personal information according to industry best practices. Our security measures (including physical, technological, and procedural safeguards) will be appropriate and reasonable. This includes the following:</li>
          <li>keeping our systems secure (like monitoring access and usage);</li>
          <li>storing our records securely.</li>
          <li>controlling the access to our buildings, systems and/or records; and</li>
          <li>safely destroying or deleting records.</li>
          <li>Ensure compliance with best practice standards.</li>
        </ul>
      </p>
      <br/>
      <br/>

      <span>How long do we keep your personal information?</span>
      <p>
        We will keep your personal information for as long as:
        <ul>
          <li>the law requires us to keep it.</li>
          <li>a contract between you and us requires us to keep it.</li>
          <li>you have consented for us keeping it.</li>
          <li>we are required to keep it to achieve the purposes listed in this Privacy Policy.</li>
          <li>we require it for statistical or research purposes.</li>
          <li>a code of conduct requires us to keep it; and / or</li>
          <li>we require it for our lawful business purposes.</li>
          Take note: We may keep your personal information even if you no longer have a relationship with us, for the historical data that may be required by your employer or employee.
        </ul>
      </p>
      <br/>
      <br/>

      <span>Our cookie policy</span>
      <p>
      A cookie is a small piece of data sent from our websites or applications to your computer or device hard drive or Internet browser where it is saved. The cookie contains information to personalise your experience on our websites or applications and may improve your experience on the websites or applications. The cookie will also identify your device, like the computer or smart phone.<br/><br/>
      By using our websites or applications you agree that cookies may be forwarded from the relevant website or application to your computer or device. The cookie will enable us to know that you have visited the website or application before and will identify you. We may also use the cookie to prevent fraud and for analytics.
      </p>
      <br/>
      <br/>

      <span>Your duties and rights about the personal information we have about you.</span>
      <p>
        You must provide proof of identity when enforcing the rights below.<br/>
        You must inform us when your personal information changes.<br/>
        Please contact our Information Officer to give effect to any of the below rights.<br/>
        You have the right to request access to the personal information we have about you by contacting us. This includes requesting:
        <ul>
          <li>confirmation that we hold your personal information.</li>
          <li>a copy or description of the record containing your personal information; and</li>
          <li>the identity or categories of third parties who have had access to your personal information.</li>
        </ul>
        We will attend to requests for access to personal information within a reasonable time. You may be required to pay a reasonable fee to receive copies or descriptions of records, or information about third parties. We will inform you of the fee before attending to your request.<br/>
        Please note that the law may limit your right to access information.<br/>
        You have the right to request us to correct or delete the personal information we have about you if it is inaccurate, irrelevant, excessive, out of date, incomplete, misleading, obtained unlawfully or we are no longer authorised to keep it. You must inform us of your request in writing. It may take up to 15 business days for the change to reflect on our systems. We may request documents from you to verify the change in personal information.<br/>
        A specific agreement that you have entered into with us may determine how you must change your personal information provided at the time when you entered into the specific agreement. Please adhere to these requirements. If the law requires us to keep the personal information, it will not be deleted upon your request. The deletion of certain personal information may lead to the termination of your business relationship with us.<br/>
        You may object on reasonable grounds to the processing of your personal information.<br/>
        We will not be able to give effect to your objection if the processing of your personal information was and is permitted by law; you have provided consent to the processing and our processing done according to your consent or the processing is necessary to conclude or perform under a contract with you.<br/>
        Where you have provided your consent for the processing of your personal information, you may withdraw your consent. If you withdraw your consent, we will explain the consequences to you. We may proceed to process your personal information even if you have withdrawn your consent if the law permits or requires it. It may take up to 15 business days for the change to reflect on our systems, during this time we may still process your personal information. You must inform us of any objection in writing. <br/>
        You have a right to file a complaint with us or any Regulator with jurisdiction about an alleged contravention of the protection of your personal information by us. We will address your complaint as far as possible.<br/>
        The contact details for the Information Regulator is as follows:
      </p>
      <table className="two">
        <tbody>
          <tr>
            <td className="first">Email</td>
            <td>Complaints.IR@justice.gov.za</td>
          </tr>
          <tr>
            <td className="first">Postal Address:</td>
            <td>P.O. Box 31533, Braamfontein, Johannesburg, 2017</td>
          </tr>
          <tr>
            <td className="first">Physical Address:</td>
            <td>JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001. </td>
          </tr>
        </tbody>
      </table>
      <br/>
      <br/>

      <span>How can you get in touch with us?</span>
      <p>
        For any queries in relation to this letter or our processing of your persona information in general, you can contact our Information Officer and/or Deputy Information Officer at the following details:<br/>
        Name: Matthew Nkala<br/>
        Contact Number: <a href="tel:0722232460"></a><br/>
        Email Address: matt@thecatalyst.africa<br/>
        
      </p>
      <br/>
      <br/>
    </InfoCon>
    </>
  );
}
export default Info;