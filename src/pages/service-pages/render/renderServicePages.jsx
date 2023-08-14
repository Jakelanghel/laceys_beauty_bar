import { Route } from "react-router-dom";
import { servicesData } from "../services-data/servicesData";
import MultiServicePage from "../service-page/multi-service-page/MultiServicePage";
import ServicePage from "../service-page/single-service-page/ServicePage";
import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";

export const renderServicePages = (isMobile) => {
  return servicesData.map((service) => {
    if (!service.multiService) {
      return (
        <Route
          key={nanoid()}
          path={`/${service.path}`}
          element={
            <AnimatePresence mode="wait">
              <ServicePage
                key={nanoid()}
                service={service}
                isMobile={isMobile}
              />
            </AnimatePresence>
          }
        />
      );
    } else {
      return (
        <Route
          key={nanoid()}
          path={`/${service.path}`}
          element={
            <AnimatePresence mode="wait">
              <MultiServicePage key={nanoid()} service={service} />
            </AnimatePresence>
          }
        />
      );
    }
  });
};
