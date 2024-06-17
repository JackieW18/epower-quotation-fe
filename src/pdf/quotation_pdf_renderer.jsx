import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@React-pdf/renderer";
import OpenSansBold from "../fonts/Open_Sans/static/OpenSans-Bold.ttf";
import Roboto from "../fonts/Roboto/Roboto-Regular.ttf"
import RobotoBold from "../fonts/Roboto/Roboto-Bold.ttf"

Font.register({
  family: 'OpenSansBold',
  src: OpenSansBold,
});

Font.register({
  family: 'Roboto',
  src: Roboto,
});

Font.register({
  family: 'RobotoBold',
  src: RobotoBold,
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    paddingTop: 42,
    paddingHorizontal: 42,
    paddingBottom: 30,
    color: 'black',
    lineHeight: 1,
    fontFamily: "Roboto",
    display: "flex"
  },
  bold: {
    fontFamily: "RobotoBold"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 4
  },
  headerTextImage: {
    width: "40vw",
    paddingBottom: 2
  },
  headerLogoImage: {
    width: "12vw",
    right: 0,
  },
  headerText: {
    fontSize: 8,
    paddingBottom: 3
  },
  headerUnderline: {
    width: "100%",
    height: 1,
    backgroundColor: "#C4261A"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8
  },
  body: {
    paddingTop: 8,
    paddingHorizontal: 6,
    color: "black",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 11,
    color: "#C4261A",
    fontFamily: "OpenSansBold"
  },
  informationBody: {
    paddingTop: 4,
    paddingHorizontal: 3,
    fontSize: 10,
    marginBottom: 20
  },
  informationLine: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 3
  },
  informationTitle: {
    width: "23%",
  },
  informationContent: {
    width: "77%"
  },
  forkliftImage: {
    width: "40%",
    right: 0,
    top: 20,
    position: "absolute"
  },
  optionBody: {
    paddingTop: 12,
    paddingHorizontal: 3,
    fontSize: 10,
    marginBottom: 20,
  },
  optionLine: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionTitle: {
    width: "20%",
    height: "100%",
    borderRight: "1",
    bordeRightColor: "black",
    paddingBottom: 8
  },
  optionContent: {
    width: "40%",
    paddingLeft: "2%",
    paddingBottom: 8,
  },
  termsConditionHeading: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  termsCondition: {
    paddingHorizontal: 2,
    fontSize: 9.5,
  },
  termsConditionLine: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  termsConditionTitle: {
    width: "24%",
    letterSpacing: "0.5px"
  },
  termsConditionContent: {
    width: "76%",
    letterSpacing: "0.3px",
    lineHeight: 1.5,
  },
  paymentHeading: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  paymentOptionBody: {
    fontSize: 9.5,
    letterSpacing: "0.3px",
    lineHeight: 1.2
  },
  quotationAcceptanceHeading: {
    paddingTop: 40,
  },
  quotationAcceptanceBody: {
    display: "flex",
    fontSize: 9.5,
    paddingTop: 20,
    paddingHorizontal: 5,
    gap: 20
  },
  quotationAcceptanceLine: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    letterSpacing: "0.3px"
  },
  quotationAcceptanceTitle: {
    width: "22%",
    fontFamily: "RobotoBold"
  },
  quotationAcceptanceContent: {
    width: "78%"
  },
  agreementHeading: {
    paddingTop: 40,
  },
  agreementBody: {
    display: "flex",
    fontSize: 9.5,
    paddingTop: 20,
    paddingHorizontal: 5,
    gap: 20
  },
  agreementLine: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    letterSpacing: "0.3px"
  },
  agreementTitle: {
    width: "22%",
    fontFamily: "RobotoBold"
  },
  agreementContent: {
    width: "78%"
  },
  inputLine: {
    width: "50%",
    height: "1px",
    backgroundColor: "black",
    marginTop: "auto"
  }
});

const Header = () => {
  return (
    <View fixed>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.headerTextImage}
            src="/header-title.png"
          />
          <Text style={styles.headerText}>
            {"ABN: 56 673 631 242"}
          </Text>

          <Text style={styles.headerText}>
            {"1800 997 167"}
          </Text>

          <Text style={styles.headerText}>
            {"www.epowerforklift.com.au"}
          </Text>

          <Text style={styles.headerText}>
            {"17 Crompton Way, Dandenong South VIC 3175"}
          </Text>
        </View>
        <View>
          <Image
            style={styles.headerLogoImage}
            src="/header-logo.png"
          />
        </View>
      </View>
      <View style={styles.headerUnderline} />
    </View>
  )
}

const Footer = () => {
  return (
    <View fixed style={styles.footer}>
      <Text>
        {`QR030524A`}
      </Text>
      <Text render={({ pageNumber }) => (
        `${pageNumber}`
      )} />
    </View>
  )
}

function InvoiceDocument() {
  const information = {
    title: [
      "Date",
      "Client Name",
      "ABN",
      "Address",
      "Contact Person",
      "Email",
      "Mobile",
      "Sales",
      "Quote Reference"
    ],
    content: [
      "03/05/2024",
      "TXK PTY LTD",
      "76 136 824 934",
      "18 Edgecombe Ct, Moorabbin VIC 3189",
      "Jack",
      "jackshi@txk.com.au",
      "0432 565 285",
      "Brandon Yu",
      "QR030524A",
    ]
  }

  const options = {
    title: [
      "Make & Model",
      "Type",
      "Load Capacity",
      "Load Center Distance",
      "Energy Type",
      "Mast",
      "Lift Height",
      "Collapse Height",
      "Fork Dimensions",
      "Battery",
      "Charger",
      "Standard Option"
    ]
  }

  return (
    <Document>

      {/* Page 1  */}
      <Page size="A4" style={styles.page}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>
            {"Quote Information"}
          </Text>
          <View style={styles.informationBody}>
            {information.title.map((title, i) => {
              return (
                <View key={i} style={styles.informationLine}>
                  <Text style={styles.informationTitle}>
                    {`${title}:`}
                  </Text>
                  <Text style={styles.informationContent}>
                    {information.content[i]}
                  </Text>
                </View>
              )
            })}
          </View>

          <Text style={styles.sectionTitle}>
            {"Recommendation (Standard Option)"}
          </Text>

          <View style={styles.optionBody}>
            <View style={styles.optionLine}>
              <Text style={styles.optionTitle}>
                {`Make & Model:`}
              </Text>
              <Text style={styles.optionContent}>
                {`EP CQE15S`}
              </Text>
            </View>

            <View style={styles.optionLine}>
              <Text style={styles.optionTitle}>
                {`Type`}
              </Text>
              <Text style={styles.optionContent}>
                {`Electric Walkie Reach`}
              </Text>
            </View>

            <View style={styles.optionLine}>
              <Text style={styles.optionTitle}>
                {`Load Capacity`}
              </Text>
              <Text style={styles.optionContent}>
                {`1500kg @ 600mm Load Centredwadassdw`}
              </Text>
            </View>

            <View style={styles.optionLine}>
              <Text style={styles.optionTitle}>
                {`Load Capacity`}
              </Text>
              <Text style={styles.optionContent}>
                {`1500kg @ 600mm Load Centredwadassdw`}
              </Text>
            </View>
            <Image
              style={styles.forkliftImage}
              src="/forklift.png"
            />
          </View>
        </View>
        <Footer />
      </Page>

      {/* Page 2 */}
      <Page size="A4" wrap style={styles.page}>
        <Header />
        <View style={styles.body}>
          <View style={styles.termsConditionHeading}>
            <Text style={styles.sectionTitle}>
              {"Purchase Terms & Conditions"}
            </Text>
          </View>

          <View style={styles.termsCondition}>
            <View style={styles.termsConditionLine}>
              <Text style={Object.assign({}, styles.termsConditionTitle, styles.bold)}>
                {`Warranty`}
              </Text>
              <View style={styles.termsConditionContent}>
                <Text>
                  {`The EPower warranty encompasses the assurance that the product is exempt from defects in workmanship and materials for a duration of 24 months or 2000 hours, whichever occurs first, commencing from the date of delivery. Please note that the quotation does not encompass expenses related to labor and materials for the scheduled post-delivery services.`}
                </Text>
                <Text>
                  {`For battery cells, the warranty period is 36 months or 3,000 hours, whichever expires first.`}
                </Text>
                <Text>
                  {`For the BMS board, fan, display, button switch, current sensor, thermal sensor, voltage sensor, wire harness, and connector, the warranty period is 24 months or 2,000 hours, whichever expires first.`}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionLine}>
              <Text style={Object.assign({}, styles.termsConditionTitle, styles.bold)}>
                {`Payment and Pricing`}
              </Text>
              <View style={styles.termsConditionContent}>
                <Text style={styles.bold}>
                  {`Payment Terms:`}
                </Text>
                <Text>
                  {`Payment must be made in cash on delivery (C.O.D.).`}
                </Text>

                <Text style={styles.bold}>
                  {`Quotation Conditions:`}
                </Text>
                <Text>
                  {`The quoted price is based on current factory rates, currency exchange, and import duties. EPower reserves the right to adjust prices if these factors change before delivery`}
                </Text>

                <Text style={styles.bold}>
                  {`No Offsetting Amounts:`}
                </Text>
                <Text>
                  {`The customer cannot offset any amounts owed to EPower against what EPower owes them under this or any other agreement.`}
                </Text>

                <Text style={styles.bold}>
                  {`Customer Assurance:`}
                </Text>
                <Text>
                  {`The customer assures that they have the financial capacity to pay for the equipment and the necessary rights to fulfill their obligations in this agreement.`}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionLine}>
              <Text style={Object.assign({}, styles.termsConditionTitle, styles.bold)}>
                {`Changes`}
              </Text>

              <View style={styles.termsConditionContent}>
                <Text style={styles.bold}>
                  {`Pricing Conditions:`}
                </Text>
                <Text>
                  {`The quoted prices are contingent upon the equipment quantities specified above. EPower retains the right to modify the quoted prices in response to any changes requested by the Customer.`}
                </Text>

                <Text style={styles.bold}>
                  {`Order Changes:`}
                </Text>
                <Text>
                  {`Any alterations to an order will only be considered effective if formally accepted in writing by EPower. The Customer shall be held responsible for all costs, expenses, and liabilities incurred by EPower in connection with any approved changes.`}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionLine}>
              <Text style={Object.assign({}, styles.termsConditionTitle, styles.bold)}>
                {`Liabilities `}
              </Text>

              <View style={styles.termsConditionContent}>
                <Text style={styles.bold}>
                  {`Non-Exclusionary Clause:`}
                </Text>
                <Text>
                  {`Nothing in these terms shall exclude, restrict, or modify any right, remedy, guarantee, term, condition, warranty, undertaking, inducement, or representation, whether implied or imposed by legislation that cannot lawfully be excluded or limited. This includes the Consumer Guarantees as stipulated in the Australian Consumer Law (ACL).`}
                </Text>

                <Text style={styles.bold}>
                  {`Exclusion of Guarantees:`}
                </Text>
                <Text>
                  {`Subject to the aforementioned clause and unless expressly provided otherwise in these terms, all guarantees, terms, conditions, warranties, undertakings, inducements, or representations, whether express or implied, statutory, or otherwise, pertaining to these terms are excluded to the maximum extent permitted by law.`}
                </Text>

                <Text style={styles.bold}>
                  {`Limitation of Liability for Breach of Warranty:`}
                </Text>
                <Text>
                  {`Subject to the aforementioned clause and unless expressly provided otherwise in these terms, all guarantees, terms, conditions, warranties, undertakings, inducements, or representations, whether express or implied, statutory, or otherwise, pertaining to these terms are excluded to the maximum extent permitted by law.`}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionLine}>
              <Text style={Object.assign({}, styles.termsConditionTitle, styles.bold)}>
                {`Government charges`}
              </Text>
              <View style={styles.termsConditionContent}>
                <Text>
                  {`Rental rates are subject to Goods and Services Tax (GST) and will be imposed in accordance with prevailing legislation. Any adjustments to the existing rates or the introduction of additional Federal and State levies and taxes applicable to a sales contract will be incorporated into the hire charges at the time of their implementation.`}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionLine}>
              <Text style={Object.assign({}, styles.termsConditionTitle, styles.bold)}>
                {`Acceptance and Cancellation`}
              </Text>
              <View style={styles.termsConditionContent}>
                <Text>
                  {`All orders shall be considered accepted upon being duly signed by the Customer. Following such acceptance, cancellation of an order is permissible only with the written consent of both parties.`}
                </Text>
                <Text>
                  {`If cancellation takes place after a consumer has signed an order, a cancellation fee equivalent to 15% of the recommended retail price will be applicable and is legally enforceable.`}
                </Text>
                <Text>
                  {`In the event that delivery is refused or becomes unfeasible, EPower reserves the right to consider such circumstances as a cancellation.`}
                </Text>
              </View>
            </View>

            <View style={styles.termsConditionLine}>
              <Text style={Object.assign({}, styles.termsConditionTitle, styles.bold)}>
                {`Force Majeure`}
              </Text>
              <View style={styles.termsConditionContent}>
                <Text>
                  {`EPower shall be absolved of liability for any non-performance or delay in fulfilling obligations under this agreement should such non-performance or delay stem from circumstances beyond its reasonable control. These encompass, but are not limited to, acts of God, war, terrorism, acts of a public enemy, blockade, revolution, riot, insurrection, civil commotion, lightning, storm, flood, fire, earthquake, epidemic or pandemic, explosion, embargo, strike, trade dispute, industrial action, transportation delays, accidents, default or delay by any supplier to EPower, and damage, stoppage, or breakdown of plant or machinery, as well as shortages of labour or material. EPower is obligated to expeditiously notify the customer of such occurrences and diligently take all reasonable measures to mitigate the repercussions of the non-performance or delay for the designated duration.`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Footer />
      </Page>

      <Page size="A4" wrap style={styles.page}>
        <Header />
        <View style={styles.body}>
          <View style={styles.paymentHeading}>
            <Text style={styles.sectionTitle}>
              {"Payment Option"}
            </Text>
          </View>
          <Text style={styles.paymentOptionBody}>
            {`The EP CQE15S (with a lift height of 4800mm and serial# 9322100062) will be delivered to the client's warehouse for demonstration purposes prior to the arrival of the stocked product (as indicated on page 1). The client will pay a deposit of AUD $5,000 if the product meets the required specifications. The remaining amount will be paid upon stock availability, and the demo product will be returned to EPower Forklift.`}
          </Text>

          <View style={styles.quotationAcceptanceHeading}>
            <Text style={styles.sectionTitle}>
              {"Quotation Acceptance"}
            </Text>
          </View>
          <View style={styles.quotationAcceptanceBody}>
            <View style={styles.quotationAcceptanceLine}>
              <Text style={styles.quotationAcceptanceTitle}>
                {"Quote Reference:"}
              </Text>
              <Text style={styles.quotationAcceptanceContent}>
                {"QR030524A"}
              </Text>
            </View>

            <View style={styles.quotationAcceptanceLine}>
              <Text style={styles.quotationAcceptanceTitle}>
                {"Delivery Address:"}
              </Text>
              <View style={styles.inputLine} />
            </View>

            <View style={styles.quotationAcceptanceLine}>
              <Text style={styles.quotationAcceptanceTitle}>
                {"ABN & ACN:"}
              </Text>
              <View style={styles.inputLine} />
            </View>
          </View>

          <View style={styles.agreementHeading}>
            <Text style={styles.sectionTitle}>
              {"Agree To the Terms and Conditions of The Proceeding Rental Agreement"}
            </Text>
          </View>
          <View style={styles.agreementBody}>
            <View style={styles.agreementLine}>
              <Text style={styles.agreementTitle}>
                {"Title:"}
              </Text>
              <View style={styles.inputLine} />
            </View>

            <View style={styles.agreementLine}>
              <Text style={styles.agreementTitle}>
                {"Name:"}
              </Text>
              <View style={styles.inputLine} />
            </View>

            <View style={styles.agreementLine}>
              <Text style={styles.agreementTitle}>
                {"Signature:"}
              </Text>
              <View style={styles.inputLine} />
            </View>

            <View style={styles.agreementLine}>
              <Text style={styles.agreementTitle}>
                {"Date:"}
              </Text>
              <View style={styles.inputLine} />
            </View>
          </View>
        </View>
        <Footer />
      </Page>
    </Document>
  )
}

export default InvoiceDocument;