import React, { Component} from "react";
import Carousel from "../Carousel/Carousel";
import LicenseScanningService from "../Content/LicenseScanningService";
import FingerPrintService from "../Content/FingerPrintService";
import QRCodeService from "../Content/QRCodeService";
import EventMarketingService from "../Content/EventMarketingService";


class Services extends Component{

    render(){


        return (

                <Carousel>
                    <LicenseScanningService/>
                    <FingerPrintService/>
                    <QRCodeService/>
                    <EventMarketingService/>
                </Carousel>

        )
    }
}

export default Services;