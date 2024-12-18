import React from "react";

interface FilterSectionProps {
  meses: string[];
  years: number[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ meses, years }) => {
  return (
    <form>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Crear Planilla */}
        <a href="/contador/crear" className="btn btn-custom text-decoration-none me-2" style={{backgroundColor: "#c1d9d4"}}>
          Crear Planilla
        </a>

        {/* Filtros */}
        <div className="d-flex align-items-center">
          {/* Selector de Mes */}
          <select className="form-select me-2" style={{ width: "150px" }}>
            <option value="">Mes</option>
            {meses.map((mes, index) => (
              <option key={index} value={mes}>
                {mes}
              </option>
            ))}
          </select>

          {/* Selector de Año */}
          <select className="form-select me-2" style={{ width: "150px" }}>
            <option value="">Año</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Botón de Filtrar */}
          <button type="submit" className="btn btn-filtrar" style={{backgroundColor: "#c1d9d4"}}>
            Filtrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FilterSection;
