import { useEffect, useState } from "react";
import { getCompanyProfile } from "../../api";
import { CompanyProfile } from "../../Company.d";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/Sildebar/Sildebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";

const CompanyPage = () => {
  let { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      console.log(result);

      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!} >
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="Market Cap" subTitle={company.mktCap.toString()} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company Not Found!</div>
      )}
    </>
  );
};


export default CompanyPage
