import { Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { servicesData } from "../services-data/servicesData";
import { nanoid } from "nanoid";
import MultiServicePage from "../service-page/multi-service-page/MultiServicePage";
import ServicePage from "../service-page/single-service-page/ServicePage";

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
