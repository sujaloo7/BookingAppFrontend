import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box
} from '@chakra-ui/react';

const Faq = () => {
    return (
        <>
            <div className="container mb-5 pt-5">
                <h4 className='text-center'><span className='' style={{ fontSize: "14px", color: "#f1592a" }}> FREQUENTLY ASKED QUESTIONS</span><br></br>We’re here to help you</h4>
                <p className='text-center' style={{ fontWeight: "900", color: "#557cef" }}>_______________</p>
                <div className="row mt-4 p-3">


                    <Accordion allowToggle>
                        <AccordionItem>
                            <h6>
                                <AccordionButton className='border-0 p-3 bg-white shadow'>
                                    <Box flex='1' textAlign='left' style={{ color: "#f1592a" }}>
                                        What are the payment options available while booking a hotel online on Our Website?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h6>
                            <AccordionPanel pb={4}>

                                Customers have the option to either make an advance payment or pay at the hotel during check-out. They can make advance payment through the card (debit as well as credit), net-banking or third party wallet. The wallets accepted on MiStay are Payzapp, Ola Money, Freecharge, SBI Buddy and Vodafone mPesa.

                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className='mt-4'>
                            <h6 className='' >
                                <AccordionButton className='border-0 p-3 bg-white shadow'>
                                    <Box flex='1' textAlign='left' style={{ color: "#f1592a" }}>

                                        How can corporate travellers benefit by booking hourly basis hotels on MiStay?

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h6>
                            <AccordionPanel pb={4}>

                                Corporate travellers and people in transit who require rooms for few hours to freshen up before a meeting or a connecting flight/ train etc. used to suffer due to rigid check-in time at the hotel. Also, often corporate travellers want to check-in early or check-out late and standard 12-noon check-in isn’t convenient for them. MiStay created a platform called
                            </AccordionPanel>
                        </AccordionItem >

                        <AccordionItem className='mt-4'>
                            <h6>
                                <AccordionButton className='border-0 p-3 bg-white shadow'>
                                    <Box flex='1' textAlign='left' style={{ color: "#f1592a" }}>

                                        Why was it not possible to book hotel rooms for few hours?

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h6>
                            <AccordionPanel pb={4}>

                                Earlier there was no concept of short stay hotels and hotels usually provided accommodation with rigid check-in and check-out time. Also offering rooms by hour comes with operational challenges and logistical complexities.There was also a challenge of dealing with the taboo associated with the booking of a room by hour. MiStay helped in solving the above problems by building a technology platform that provides a scalable solution to support the change required in booking hotel rooms by hour.


                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className='mt-4'>
                            <h6>
                                <AccordionButton className='border-0 p-3 bg-white shadow'>
                                    <Box flex='1' textAlign='left' style={{ color: "#f1592a" }}>


                                        What is the cancellation policy at MiStay?


                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h6>
                            <AccordionPanel pb={4}>

                                Different hotels have different cancellation policies with hotels deducting a particular percent of your total booking price based on the time you will cancel your confirmed booking before check-in. The same will be mentioned in the cancellation policy section of hotel profile page on our website.



                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className='mt-4'>
                            <h6>
                                <AccordionButton className='border-0 p-3 bg-white shadow'>
                                    <Box flex='1' textAlign='left' style={{ color: "#f1592a" }}>


                                        What is the minimum age to book an hourly hotel room?


                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h6>
                            <AccordionPanel pb={4}>

                                The right to admission of allowing a guest of particular age group always lies with the hotel. According to law, guests need to be above 18 years of age to be allowed to check-in. However, there are some hotels which have an age limit greater than 18 years. All the above conditions apply equally well while booking an hourly hotel room through MiStay.



                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </>
    )
}

export default Faq