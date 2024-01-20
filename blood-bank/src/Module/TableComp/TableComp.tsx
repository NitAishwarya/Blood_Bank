import styless from "./TableComp.module.scss";

const TableComp = (props: {
  tableData: any[];
  deleteFun: (id: any) => void;
}) => {
  const { tableData, deleteFun } = props;
  return (
    <div>
      <table className={styless["table"]}>
        <tr className={styless["tr"]}>
          <th className={styless["th"]}>Donar Name</th>
          <th className={styless["th"]}>DOB </th>
          <th className={styless["th"]}>Gender</th>
          <th className={styless["th"]}>email</th>
          <th className={styless["th"]}>phone</th>
          <th className={styless["th"]}>Add</th>
          <th className={styless["th"]}>Occup</th>
          <th className={styless["th"]}>BloodType</th>
          <th className={styless["th"]}>DonateEver</th>
          <th className={styless["th"]}>AnyDiseases</th>
          <th className={styless["th"]}>AnyAllergies</th>
          <th className={styless["th"]}>Action</th>
        </tr>
        {tableData.map((row) => {
          return (
            <tr className={styless["tr"]}>
              <td className={styless["td"]}>{row.donarName}</td>
              <td className={styless["td"]}>{row.DOB}</td>
              <td className={styless["td"]}>{row.gender}</td>
              <td className={styless["td"]}>{row.email}</td>
              <td className={styless["td"]}>{row.phone}</td>
              <td className={styless["td"]}>{row.Add}</td>
              <td className={styless["td"]}>{row.occup}</td>
              <td className={styless["td"]}>{row.BloodType}</td>
              <td className={styless["td"]}>{row.DonateEver}</td>
              <td className={styless["td"]}>{row.AnyDiseases}</td>
              <td className={styless["td"]}>{row.Anyallergies}</td>

              <td className={styless["td"]}>
                <button style={{backgroundColor:"red", color:"white"}} onClick={() => deleteFun(row.id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TableComp;
