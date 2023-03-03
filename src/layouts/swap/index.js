
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components
import cswap from "layouts/swap/components/cswap";

// React icons

// Data


function Swap() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={26}>
       
        <VuiBox mb={3}>
          <Grid container spacing="18px"justifyContent="center">
            <Grid item xs={12} lg={12} xl={5}>
              <cswap />
            </Grid>
          </Grid>
        </VuiBox>
       
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Swap;
