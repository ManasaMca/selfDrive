import React, { memo, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, StatusBar, Linking, TouchableOpacity, TextInput, CheckBox, ScrollView } from 'react-native';
import colors from '../../stylesheet/colors';
import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,
  
} from '../../stylesheet/responsiveSize';



const TermsConditions = ({ navigation }) => {


    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView backgroundColor={colors.white} >
                <View style={[styles.flex_row]} >
                    <View style={[styles.pv1]}>
                        <TouchableOpacity
                            onPress={() => navigation.pop()}
                        >
                            {/* <Image source={AppConstants.BackArrow} alt="" /> */}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.logoView]}>
                        {/* <Image source={AppConstants.LogoMedium} style={{ width: 50, height: 50 }} alt="" />
                     */}
                     </View>
                </View>
                <View style={[styles.Title]}>
                    <Text style={[styles.titleText]}>
                        Terms & Conditions
                    </Text>
                </View>
                <View style={[styles.Container]}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View>

                            <Text style={[styles.conditionText1]}>
                                Basic structure of the business
                            </Text>
                            <Text style={[styles.conditionText]}>
                                <Text style={[styles.linktext]}>INATRIP</Text>
                             provides a technological solution as a platform for the vehicle owners who choose to utilize their empty seats by offering rides to ride-takers who plan to travel in the same route.
                             If you think you have a vacant seat in your car while you travel long-distance We are absolutely on your side. We want to bridge the gap between Vehicle Owners who
                              want to offer their vacant seats for carpooling and ride-takers who want to travel at an affordable price.
                            So the ride-taker and the Vehicle Owner can ride together and share the cost.
                            </Text>
                            <Text style={[styles.conditionText1]}>
                                1.	General conditions to use INATRIP APP
                            </Text>
                            <Text style={[styles.conditionText]}>
                                INATRIP provides a technological platform solution for the users who are either a ‘Vehicle owner’ or
                                a ‘Ride-taker’ who wishes to travel in the same direction, for the one at which the vehicle-owner shall provide a ride and the ride-taker shall
                                join the ride-owner for a cost and this offer price is fixed by vehicle owner himself.
                            </Text>
                            <Text style={[styles.conditionText]}>
                                For the fixed cost the ride taker will complete the ride with the vehicle owner as he shares his empty seats for the journey together. INATRIP provides itra-city and inter-city.
                            </Text>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={[styles.conditionText]}>
                                    a.	It is required for all users who are ride-takers and vehicle-owners to be over the age of 18 years to use INATRIP service.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    b.	All drivers (vehicle-owner) shall hold a driving licence to drive the vehicle and the vehicle owner must also possess a car, along with the legal registration number.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    c.	At the time of registration the Vehicle owner shall provide with proper registration certificate of the car.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    d.	Pollution certificate shall also possess and provide the at the time of the time of registration with INATRIP.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    e.	Car Insurance validity and updation shall be the responsibility of the  car-vehicle owner and will be verified by INATRIP.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    f.	Company shall vary its services and communication platforms at any point without notice to the users.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    g.	In the case of accidents and breakdown: INTRIP will not bear any responsibility for the accidents (car-breakdown, fuel deficiency, frauds, listed below).
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    h.	Vehicle owner to possess the car legally - along with the legal registration  number
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    i.	WE CHARGE 10% COMMISSION PER EACH SEAT IN A CAR FROM THE DRIVER.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    j.	WE CHARGE 5% BOOKING CHARGERS PER EACH SEAT IN A CAR FROM THE CUSTOMER.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    k.	Liability, INATRIP is not liable for any loss or damage arising as result of:
                            </Text>
                                <View style={{ paddingLeft: 20 }}>
                                    <Text style={[styles.conditionText]}>
                                        i.	A false, misleading, inaccurate or incomplete information being provided by a User;
                            </Text>
                                    <Text style={[styles.conditionText]}>
                                        ii.	The cancellation of a Trip by a Vehicle Owner or Co-passenger;
                            </Text>
                                    <Text style={[styles.conditionText]}>
                                        iii.	Any failure to make payment of a Cost Contribution (for the free service without booking);
                            </Text>
                                    <Text style={[styles.conditionText]}>
                                        iv.	Any fraud, fraudulent misrepresentation or breach of duty or breach of any of these Conditions by
                                        a Vehicle Owner or Co-Passenger before, during or after a Trip.
                            </Text>
                                </View>
                                <Text style={[styles.conditionText]}>
                                    l.	Emergency & Abuse: In the case of emergency & abuse INATRIP is not responsible
                                    for the mishappenings which are projected by the 3rd party agents.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    m.	Creating of accounts : In order to use our service you should provide valid ID proofs such as
                                    ( Aadhar card, Driving Licence, phone number with matching e-mail ID)
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    n.	Payment gateway: INATRIP will partner with 3rd parties for the payment gateway system a
                                    nd is not responsible for errors and risks that are incurred at the payment end.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    o.	Cancellation fee: In the case of any cancellation INATRIP is only responsible for the refund i.e. 50% will be
                                    charged for each transaction and 50 % of the cost will be returned to the customer.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    p.	Rating and recommendation will be given for each rider that enables
                                    users with the better service and recommendations for star riders.
                            </Text>
                            </View>
                            <Text style={[styles.conditionText1]}>
                                2.	Registration and Verification process
                            </Text>
                            <Text style={[styles.conditionText]}>
                                Verification for a rider: Each rider will have to verify their identity and carry valid ID - verification while riding.
                            </Text>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={[styles.conditionText]}>
                                    a.	To use the INATRIP platform every user must complete registration on INATRIP and create a user account.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    b.	As a part of the registration process, User agrees to provide current, complete and accurate registration information
                                    and verification details and keep it updated, complete and also provide accurate information throughout its use.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    c.	Users agrees to comply with the T&C and accepts that their personal data may be used, collected,
                                    stored or processed in accordance with the INATRIP process.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    d.	In order to be registered, the User can sign in through Gmail ID/Phone Number/any email thereby
                                    providing consent to capture details of User from Gmail ID/Phone Number/any email which may be published
                                    on their respective account on INATRIP. The verification will be completed through OTP with Mobile Verification of User on INATRIP.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    e.	Only after confirmation of the User Account by the Company, the User can offer or book a ride.
                                    However, User agrees and understands that the Company does not undertake any responsibility
                                    for the accuracy of the Registration Data and any other information provided by the User on the Application or to a co-passenger & Rider, as the case may be.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    f.	Phone Number Verification: In order to ensure the credibility of the user mobile Mobile Verification is used to verify.
                                    INATRIP will send a SMS consisting of numbers as OTP- one-time-password  on the registered mobile number of the user.
                                    The user needs to validate this 'one time password' on INATRIP application in order to complete the process of registration and verification.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    g.	Government ID will also be verified as the user registers with INATRIP platform, using AADHAR card number.

                           </Text>
                            </View>
                            <Text style={[styles.conditionText1]}>
                                3. Use of services
                            </Text>
                            <Text style={[styles.conditionText]}>
                                Users agree and accept that all of the information they provide to INATRIP when setting up their User Account and at any other
                                time shall be true, correct, complete and accurate in all respects.
                            </Text>
                            <Text style={[styles.conditionText1]}>
                                4. Obligations
                            </Text>
                            <Text style={[styles.conditionText1]}>
                                A. Covenants and obligations of the vehicle owner
                            </Text>
                            <Text style={[styles.conditionText]}>
                                The Vehicle Owner agrees:
                            </Text>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={[styles.conditionText]}>
                                    a.	That the ride shall not be for any fraudulent, unlawful or criminal activity;
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    b.	That they will procure for the Vehicle, a comprehensive insurance policy, which provides insurance
                                    cover to the occupants in the Vehicle and covers third party liability;
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    c.	That they will present themselves on time and at the place agreed with the specified Vehicle
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    d.	That they will immediately inform all Co-Passengers of any change whatsoever to the Trip. If one or more Co-Passengers have
                                    made a booking and the Vehicle Owner decides to change any aspect of the Trip, the Vehicle Owner undertakes to contact all
                                    Co-Passengers who have made a booking in relation to that Trip and to obtain the agreement of all Co-Passengers to the change. If a Co-Passenger refuses the change,
                                    they are entitled to a full refund and without any compensation being paid to the Vehicle Owner.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    e.	The Vehicle Owner must comply with the Good Conduct Charter at all times.

                            </Text>
                            </View>
                            <Text style={[styles.conditionText1]}>
                                B. Obligations of the riders
                            </Text>
                            <Text style={[styles.conditionText]}>
                                The Co-Passenger agrees:
                            </Text>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={[styles.conditionText]}>
                                    a.	That the Trip shall not be for any fraudulent, unlawful or criminal activity.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    b.	That they will present themselves on time and at the place agreed with the Vehicle Owner;
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    c.	That they will immediately inform the Vehicle Owner or INATRIP if they are required to cancel a Trip.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    d.	That they will comply with the Good Conduct Charter at all times.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    e.	The Co-Passenger agrees to wait at the pickup point for at least 30 minutes after the agreed time for the Vehicle Owner to arrive.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    f.	That they will pay the Cost Contribution to the Vehicle Owner.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    g.	If the Co-Passenger or Vehicle Owner fails to comply with any of these terms or any other Conditions
                                    INATRIP reserves the right to keep information relating to the breach, to publish or disclose this information
                                    on the Users online profile and to suspend or withdraw the Users access to the Site.
                            </Text>
                                <Text style={[styles.conditionText]}>
                                    h.	That they shall ensure that all other persons who accompany the Co-Passengers in the Trip comply with these Conditions as applicable to a Co-Passengers.

                            </Text>
                            </View>
                            <Text style={[styles.conditionText1]}>
                                5. Confidentiality
                            </Text>
                            <Text style={[styles.conditionText]}>
                                All Users will have to be responsible for maintaining the confidentiality of his user ID and password created at the time of registration and User shall
                                be fully responsible for all the activities that occur under his User Account.


                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("UserSignUp"); }}
                        style={[styles.btnStyle]} >
                        <Text style={[styles.btnText]}>
                          I AGREE ON
                        </Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </>

    );
}

export default memo(TermsConditions);


const styles = StyleSheet.create({
    linktext:{
        color:colors.themeColor,
        fontSize: responsiveFontSize(22),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
    },
    flex_row: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    logoView: {
        alignItems: 'center',
        width: '85%',
        justifyContent: 'center',
    },
    Title: {
        paddingLeft:responsiveHorizontalSize(7),
        paddingBottom:responsiveVerticalSize(0.5),
        paddingTop:responsiveVerticalSize(0.5),
       // alignItems: 'center',
      //  justifyContent: 'center',
       // width:'90%'
    },
    titleText: {
        fontSize: responsiveFontSize(22),
        color: colors.themeColor,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
       // alignSelf:'center'
    },
    Container: {
        height: '70%',
        width: '90%',
        padding: 10,
        borderColor: colors.grey,
        borderWidth: 0.8,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: colors.lightWhite,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    conditionText: {
       
        paddingTop:responsiveVerticalSize(0.5),
        fontSize: responsiveFontSize(16),
        color: colors.black,
        fontWeight: 'normal',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
    },
   
    conditionText1: {
        fontSize: responsiveFontSize(18),
        color: colors.black,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Geomanist' : null,
    },
    btnStyle: {
        backgroundColor: colors.themeColor,
        height: 50,
        width:'40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      marginHorizontal:10,
      marginVertical:10
    },
    btnText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },
   
});

