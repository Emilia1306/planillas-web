import React from "react";
import NavbarContador from "../../components/NavbarContador";

const CrearPlanilla: React.FC = () => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const empleado = {
    nombre: "Juanito Kevin Cortez Padilla",
    dui: "01234567-8",
    contrato: "Tiempo Completo",
    sueldoBase: 1200.0,
    cargosAdicionales: 300.0,
  };

  const handleCalcular = () => {
    console.log("Cálculo realizado");
    // Lógica para manejar el cálculo
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Planilla enviada");
    // Lógica para enviar el formulario
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Navbar */}
      <NavbarContador userName="María Gonzáles" userRole="Contador/a" />

      {/* Contenido principal */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Tarjeta principal */}
        <div
          className="main-card"
          style={{
            backgroundColor: "#56735A",
            borderRadius: "15px",
            color: "white",
            padding: "20px",
            marginBottom: "20px",
            width: "100%",
            maxWidth: "1200px",
            textAlign: "center",
          }}
        >
          <h3>Crear Planilla para {empleado.nombre}</h3>
        </div>

        {/* Información del empleado */}
        <div
          className="section-card"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <h5
            style={{
              backgroundColor: "#c1d9d4",
              color: "#2f3e55",
              borderRadius: "5px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Información del empleado
          </h5>
          <div className="row">
            <div className="col-md-3 text-end">
              <p><strong>Empleado:</strong></p>
              <p><strong>DUI:</strong></p>
              <p><strong>Tipo de Contrato:</strong></p>
              <p><strong>Sueldo Base:</strong></p>
              <p><strong>Sueldo por cargos adicionales:</strong></p>
            </div>
            <div className="col-md-9">
              <p>{empleado.nombre}</p>
              <p>{empleado.dui}</p>
              <p>{empleado.contrato}</p>
              <p>${empleado.sueldoBase.toFixed(2)}</p>
              <p>${empleado.cargosAdicionales.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Información de la planilla */}
        <div
          className="section-card"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <h5
            style={{
              backgroundColor: "#c1d9d4",
              color: "#2f3e55",
              borderRadius: "5px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Información de la planilla
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="mes" className="form-label">Mes:</label>
                <select className="form-control" id="mes" name="mes" required>
                  <option value="">Seleccione un Mes</option>
                  {meses.map((mes, index) => (
                    <option key={index} value={mes}>
                      {mes}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="anio" className="form-label">Año:</label>
                <input
                  type="number"
                  className="form-control"
                  id="anio"
                  name="anio"
                  value={2024}
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="bono" className="form-label">Bono:</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="bono"
                  name="bono"
                  defaultValue={0}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="dias_laborados" className="form-label">
                  Días Laborados:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="dias_laborados"
                  name="dias_laborados"
                  min="1"
                  max="30"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="descuentos_extra" className="form-label">
                  Descuentos Extra:
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="descuentos_extra"
                  name="descuentos_extra"
                  defaultValue={0}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="horas_extras_am" className="form-label">
                  Horas Extras a.m.:
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="horas_extras_am"
                  name="horas_extras_am"
                  defaultValue={0}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="horas_extras_pm" className="form-label">
                  Horas Extras p.m.:
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="horas_extras_pm"
                  name="horas_extras_pm"
                  defaultValue={0}
                />
              </div>
            </div>

            {/* Botón Calcular */}
            <div className="text-center mb-4">
              <button
                type="button"
                onClick={handleCalcular}
                className="btn"
                style={{
                  backgroundColor: "#C1D9D4",
                  color: "#2F3E55",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontWeight: "bold",
                }}
              >
                Calcular
              </button>
            </div>

            <hr />

            {/* Descuentos */}
            <h5
              style={{
                backgroundColor: "#c1d9d4",
                color: "#2F3E55",
                borderRadius: "5px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Descuentos
            </h5>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="isss" className="form-label">ISSS:</label>
                <input
                  type="text"
                  className="form-control"
                  id="isss"
                  name="isss"
                  disabled
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="afp" className="form-label">AFP:</label>
                <input
                  type="text"
                  className="form-control"
                  id="afp"
                  name="afp"
                  disabled
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="isr" className="form-label">ISR:</label>
                <input
                  type="text"
                  className="form-control"
                  id="isr"
                  name="isr"
                  disabled
                />
              </div>
            </div>

            {/* Salario Líquido */}
            <h5
              style={{
                backgroundColor: "#c1d9d4",
                color: "#2F3E55",
                borderRadius: "5px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Salario Líquido
            </h5>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                id="salario_liquido"
                name="salario_liquido"
                disabled
              />
            </div>

            {/* Botón para crear planilla */}
            <div className="text-center">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#C1D9D4",
                  color: "#2F3E55",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontWeight: "bold",
                }}
              >
                Crear Planilla
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearPlanilla;
