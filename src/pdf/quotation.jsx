import React from "react";
import Page from "../component/Page"
import { useSelector } from "react-redux";

function Quotation({ printRef, showPreview }) {
  const information = useSelector((state) => state.information)
  const model = useSelector((state) => state.model)

  const bodyStyle = `pt-3 px-2 text-left text-black flex-1`
  const termsConditionLineStyle = `flex flex-row pb-4`
  const termsConditionTitleStyle = `w-[24%] font-bold`
  const inputLineStyle = `w-[50%] h-[1px] bg-black mt-auto`

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
  const Header = () => {
    return (
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ">
            <img
              className="w-[8.47cm] h-[0.45cm] pb-[2px]"
              src="/header-title.png"
            />
            <div className="text-[10px] text-left">
              <p>
                {"ABN: 56 673 631 242"}
              </p>
              <p>
                {"1800 997 167"}
              </p>
              <p>
                {"www.epowerforklift.com.au"}
              </p>
              <p>
                {"17 Crompton Way, Dandenong South VIC 3175"}
              </p>
            </div>
  
          </div>
          <img
            className="h-[1.6cm] w-[2.38cm] "
            src="/header-logo.png"
          />
        </div>
        <div className="mt-[0.2cm] h-[1px] bg-[#C4261A]" />
      </div>
    )
  }
  
  function Footer({ pageNumber }) {
    return (
      <div className="flex flex-row justify-between text-[10px]">
        <p>
          {`QR030524A`}
        </p>
        <p>{`${pageNumber}`}</p>
      </div>
    )
  }
  
  function getUpgrades(){
    return model.data.optionsCategories.filter((optionsCategory) => !optionsCategory.options[optionsCategory.selected].isDefault)
  }

  function getTotalPrice(){
    return model.data.optionsCategories.reduce((partialSum, optionsCategory) => partialSum + parseFloat(optionsCategory.options[optionsCategory.selected].price), parseFloat(model.data.price))
  }

  return (
    <div id="quotation-document" ref={printRef} className={`flex flex-col mx-auto w-[21cm] font-sans text-[12.5px] ${showPreview ? `gap-6` : ``}`}>
      {/* Page 1  */}
      <Page>
        <Header />
        <div className={bodyStyle}>
          <p className="text-[13.5px] text-primary font-bold">
            {"Quote Information"}
          </p>
          <div className={`pb-5 p-1`}>
            {Object.keys(information.data).map((k) => {
              return (
                <div key={k} className="flex flex-row py-[2px]">
                  <p className="w-[140px]">
                    {`${information.data[k].field}:`}
                  </p>
                  <p className="pl-2 flex-1">
                    {information.data[k].value}
                  </p>
                </div>
              )
            })}
          </div>

          <p className="text-[13.5px] text-primary font-bold">
            {"Recommendation (Standard Option)"}
          </p>

          <div className="block p-1 pb-5 min-h-[300px]">
            <div className=" gap-4 float-none">
              <div>
                <img
                  className="h-[250px] float-right"
                  src={`/models/${model.data.modelCode}/image.png`}
                />
              </div>

              <div className={`flex flex-row flex-wrap`}>
                <p className={`w-[140px] border-r-2 py-1`}>
                  {`Make & Model`}
                </p>
                <p className={`pl-2 flex-1 py-1`}>
                  {`${model.data.modelCode}`}
                </p>
              </div>

              <div className={`flex flex-row flex-wrap`}>
                <p className={`w-[140px] border-r-2 py-1`}>
                  {`Type`}
                </p>
                <p className={`pl-2 flex-1 py-1`}>
                  {`${model.data.type}`}
                </p>
              </div>

              <div className={`flex flex-row flex-wrap`}>
                <p className={`w-[140px] border-r-2 py-1`}>
                  {`Load Capacity`}
                </p>
                <p className={`pl-2 flex-1 py-1`}>
                  {`${model.data.loadCapacity}`}
                </p>
              </div>

              <div className={`flex flex-row flex-wrap`}>
                <p className={`w-[140px] border-r-2 py-1`}>
                  {`Load Centre Distance`}
                </p>
                <p className={`pl-2 flex-1 py-1`}>
                  {`${model.data.loadCenterDistance}`}
                </p>
              </div>

              <div className={`flex flex-row flex-wrap`}>
                <p className={`w-[140px] border-r-2 py-1`}>
                  {`Energy Type`}
                </p>
                <p className={`pl-2 flex-1 py-1`}>
                  {`${model.data.energyType}`}
                </p>
              </div>
              {
                model.data.standardOptions.map((standardOption, index) => {
                  return (
                    <div key={index} className={`flex flex-row flex-wrap`}>
                      <p className={`w-[140px] border-r-2 py-1`}>
                        {`${standardOption.standardOptionType}`}
                      </p>
                      <p className={`pl-2 flex-1 py-1`}>
                        {`${standardOption.standardOptionValue}`}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <p className="text-[13.5px] text-primary font-bold">
            {"Estimated Price for Purchase"}
          </p>

          <div className="flex p-1">
            <table className="table-fixed w-full">
              <thead>
                <tr>
                  <th className="text-left">{`Type`}</th>
                  <th className="text-center">{`Make & Model`}</th>
                  <th className="text-right">{`Estimated Price (Excl. GST)`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left">{model.data.type}</td>
                  <td className="text-center">{model.data.modelCode}</td>
                  <td className="text-right">{`AUD ${formatter.format(model.data.price)}`}</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-center font-bold">{`Optional Items`}</td>
                  <td></td>
                </tr>
                {getUpgrades().map((optionsCategory) => {
                  const price = optionsCategory.options[optionsCategory.selected].price
                  return(
                    <tr className={''} key={optionsCategory.name}>
                      <td className="text-left">{`${optionsCategory.name} ${price > 0 ? 'Upgrade' : (price < 0 ? 'Downgrade': 'Change')}`}</td>
                      <td className="text-center">{`${optionsCategory.options[optionsCategory.selected].onQuoteDescription}`}</td>
                      <td className="text-right">{`AUD ${formatter.format(price)}`}</td>
                    </tr>
                  )
                })}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right font-bold">{`Total: AUD ${formatter.format(getTotalPrice())}`}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <Footer pageNumber={1} />
      </Page>

      {/* Page 2 */}
      <Page>
        <Header />
        <div className={bodyStyle}>
          <div className="pt-5 pb-10">
            <p className="text-[13.5px] text-primary font-bold">
              {"Purchase Terms & Conditions"}
            </p>
          </div>

          <div className={`px-1`}>
            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {`Warranty`}
              </p>
              <div className={`flex-1`}>
                <p>
                  {`The EPower warranty encompasses the assurance that the product is exempt from defects in workmanship and materials for a duration of 24 months or 2000 hours, whichever occurs first, commencing from the date of delivery. Please note that the quotation does not encompass expenses related to labor and materials for the scheduled post-delivery services.`}
                </p>
                <p>
                  {`For battery cells, the warranty period is 36 months or 3,000 hours, whichever expires first.`}
                </p>
                <p>
                  {`For the BMS board, fan, display, button switch, current sensor, thermal sensor, voltage sensor, wire harness, and connector, the warranty period is 24 months or 2,000 hours, whichever expires first.`}
                </p>
              </div>
            </div>

            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {`Payment and Pricing`}
              </p>
              <div className={`flex-1`}>
                <p className={`font-bold`}>
                  {`Payment Terms:`}
                </p>
                <p>
                  {`Payment must be made in cash on delivery (C.O.D.).`}
                </p>

                <p className={`font-bold`}>
                  {`Quotation Conditions:`}
                </p>
                <p>
                  {`The quoted price is based on current factory rates, currency exchange, and import duties. EPower reserves the right to adjust prices if these factors change before delivery`}
                </p>

                <p className={`font-bold`}>
                  {`No Offsetting Amounts:`}
                </p>
                <p>
                  {`The customer cannot offset any amounts owed to EPower against what EPower owes them under this or any other agreement.`}
                </p>

                <p className={`font-bold`}>
                  {`Customer Assurance:`}
                </p>
                <p>
                  {`The customer assures that they have the financial capacity to pay for the equipment and the necessary rights to fulfill their obligations in this agreement.`}
                </p>
              </div>
            </div>

            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {`Changes`}
              </p>

              <div className={`flex-1`}>
                <p className={`font-bold`}>
                  {`Pricing Conditions:`}
                </p>
                <p>
                  {`The quoted prices are contingent upon the equipment quantities specified above. EPower retains the right to modify the quoted prices in response to any changes requested by the Customer.`}
                </p>

                <p className={`font-bold`}>
                  {`Order Changes:`}
                </p>
                <p>
                  {`Any alterations to an order will only be considered effective if formally accepted in writing by EPower. The Customer shall be held responsible for all costs, expenses, and liabilities incurred by EPower in connection with any approved changes.`}
                </p>
              </div>
            </div>

            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {`Liabilities `}
              </p>

              <div className={`flex-1`}>
                <p className={`font-bold`}>
                  {`Non-Exclusionary Clause:`}
                </p>
                <p>
                  {`Nothing in these terms shall exclude, restrict, or modify any right, remedy, guarantee, term, condition, warranty, undertaking, inducement, or representation, whether implied or imposed by legislation that cannot lawfully be excluded or limited. This includes the Consumer Guarantees as stipulated in the Australian Consumer Law (ACL).`}
                </p>

                <p className={`font-bold`}>
                  {`Exclusion of Guarantees:`}
                </p>
                <p>
                  {`Subject to the aforementioned clause and unless expressly provided otherwise in these terms, all guarantees, terms, conditions, warranties, undertakings, inducements, or representations, whether express or implied, statutory, or otherwise, pertaining to these terms are excluded to the maximum extent`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer pageNumber={2} />
      </Page>

      {/* Page 3 */}
      <Page>
        <Header />
        <div className={bodyStyle}>
          <div className={`px-1`}>
            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {``}
              </p>

              <div className={`flex-1`}>
                <p>
                  {`permitted by law.`}
                </p>
                <p className={`font-bold`}>
                  {`Limitation of Liability for Breach of Warranty:`}
                </p>
                <p>
                  {`Subject to the aforementioned clause and unless expressly provided otherwise in these terms, all guarantees, terms, conditions, warranties, undertakings, inducements, or representations, whether express or implied, statutory, or otherwise, pertaining to these terms are excluded to the maximum extent permitted by law.`}
                </p>
              </div>
            </div>

            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {`Government charges`}
              </p>
              <div className={`flex-1`}>
                <p>
                  {`Rental rates are subject to Goods and Services Tax (GST) and will be imposed in accordance with prevailing legislation. Any adjustments to the existing rates or the introduction of additional Federal and State levies and taxes applicable to a sales contract will be incorporated into the hire charges at the time of their implementation.`}
                </p>
              </div>
            </div>
            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {`Acceptance and Cancellation`}
              </p>
              <div className={`flex-1`}>
                <p>
                  {`All orders shall be considered accepted upon being duly signed by the Customer. Following such acceptance, cancellation of an order is permissible only with the written consent of both parties.`}
                </p>
                <p>
                  {`If cancellation takes place after a consumer has signed an order, a cancellation fee equivalent to 15% of the recommended retail price will be applicable and is legally enforceable.`}
                </p>
                <p>
                  {`In the event that delivery is refused or becomes unfeasible, EPower reserves the right to consider such circumstances as a cancellation.`}
                </p>
              </div>
            </div>

            <div className={termsConditionLineStyle}>
              <p className={termsConditionTitleStyle}>
                {`Force Majeure`}
              </p>
              <div className={`flex-1`}>
                <p>
                  {`EPower shall be absolved of liability for any non-performance or delay in fulfilling obligations under this agreement should such non-performance or delay stem from circumstances beyond its reasonable control. These encompass, but are not limited to, acts of God, war, terrorism, acts of a public enemy, blockade, revolution, riot, insurrection, civil commotion, lightning, storm, flood, fire, earthquake, epidemic or pandemic, explosion, embargo, strike, trade dispute, industrial action, transportation delays, accidents, default or delay by any supplier to EPower, and damage, stoppage, or breakdown of plant or machinery, as well as shortages of labour or material. EPower is obligated to expeditiously notify the customer of such occurrences and diligently take all reasonable measures to mitigate the repercussions of the non-performance or delay for the designated duration.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer pageNumber={3} />
      </Page>

      {/* Page 4 */}
      <Page>
        <Header />
        <div className={`pt-3 px-2 text-left text-black flex-1`}>
          <div className="pt-4 pb-2">
            <p className="text-[13.5px] text-primary font-bold">
              {"Payment Option"}
            </p>
          </div>
          <div className="">
            <p>
              {`The EP CQE15S (with a lift height of 4800mm and serial# 9322100062) will be delivered to the client's warehouse for demonstration purposes prior to the arrival of the stocked product (as indicated on page 1). The client will pay a deposit of AUD $5,000 if the product meets the required specifications. The remaining amount will be paid upon stock availability, and the demo product will be returned to EPower Forklift.`}
            </p>
          </div>

          <div className="pt-10">
            <p className="text-[13.5px] text-primary font-bold">
              {"Quotation Acceptance"}
            </p>
          </div>
          <div className="flex flex-col w-full gap-5 pt-5">
            <div className="w-full flex flex-row">
              <p className="w-[22%]">
                {"Quote Reference:"}
              </p>
              <p className="flex-1">
                {"QR030524A"}
              </p>
            </div>

            <div className="w-full flex flex-row">
              <p className="w-[22%]">
                {"Delivery Address:"}
              </p>
              <div className={inputLineStyle} />
            </div>

            <div className="w-full flex flex-row">
              <p className="w-[22%]">
                {"ABN & ACN:"}
              </p>
              <div className={inputLineStyle} />
            </div>
          </div>

          <div className="pt-10">
            <p className="text-[13.5px] text-primary font-bold">
              {"Agree To the Terms and Conditions of The Proceeding Rental Agreement"}
            </p>
          </div>
          <div className="flex flex-col w-full gap-5 pt-5">
            <div className="w-full flex flex-row">
              <p className="w-[22%]">
                {"Title:"}
              </p>
              <div className={inputLineStyle} />
            </div>

            <div className="w-full flex flex-row">
              <p className="w-[22%]">
                {"Name:"}
              </p>
              <div className={inputLineStyle} />
            </div>

            <div className="w-full flex flex-row">
              <p className="w-[22%]">
                {"Signature:"}
              </p>
              <div className={inputLineStyle} />
            </div>

            <div className="w-full flex flex-row">
              <p className="w-[22%]">
                {"Date:"}
              </p>
              <div className={inputLineStyle} />
            </div>
          </div>
        </div>
        <Footer />
      </Page>
    </div>
  )
}

export default Quotation;