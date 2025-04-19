import { countriesData } from '../../../data/mockData';
import './SalesByCountry.css';

const SalesByCountry = () => {
  return (
    <div className="country-card">
      <h2 className="country-title">Sales by Country</h2>
      <div className="table-container">
        <table className="country-table">
          <thead>
            <tr className="table-header">
              <th className="header-cell">Country</th>
              <th className="header-cell">Orders</th>
              <th className="header-cell">Percent</th>
              <th className="header-cell align-right">Value</th>
            </tr>
          </thead>
          <tbody>
            {countriesData.map((country) => (
              <tr key={country.id} className="table-row">
                <td className="table-cell">
                  <div className="country-cell">
                    <span className="country-flag">{country.flag}</span>
                    <span className="country-name">{country.country}</span>
                  </div>
                </td>
                <td className="table-cell">{country.orders}</td>
                <td className="table-cell">{country.percent}</td>
                <td className="table-cell align-right value-cell">{country.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesByCountry

