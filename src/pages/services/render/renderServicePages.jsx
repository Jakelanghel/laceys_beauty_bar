import { Route } from "react-router-dom";
import { servicesData } from "../services-data/servicesData";
import MultiServicePage from "../service-page/multi-service-page/MultiServicePage";
import ServicePage from "../service-page/single-service-page/ServicePage";

export const renderServicePages = (isMobile) => {
  return servicesData.map((service) => {
    if (!service.multiService) {
      return (
        <Route
          key={service.path}
          path={`/${service.path}`}
          element={<ServicePage service={service} isMobile={isMobile} />}
        />
      );
    } else {
      return (
        <Route
          key={service.path}
          path={`/${service.path}`}
          element={<MultiServicePage service={service} />}
        />
      );
    }
  });
};
