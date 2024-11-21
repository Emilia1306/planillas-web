import React from 'react';
import NavbarContador from "../../components/NavbarContador";

const PlanillaDetalle: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Navbar que ocupa todo el ancho */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%', // Abarca todo el ancho de la pantalla
          zIndex: 1000, // Asegura que esté sobre otros elementos
        }}
      >
        <NavbarContador userName="María Gonzáles" userRole="Contador/a" />
      </div>

      {/* Espaciado para compensar la Navbar fija */}
      <div style={{ height: '100px' }}></div>

      {/* Contenido principal */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
        }}
      >
        {/* Tarjeta principal */}
        <div
          style={{
            backgroundColor: '#56735A',
            borderRadius: '15px',
            color: 'white',
            padding: '20px',
            marginBottom: '20px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <h3>Detalle Planilla de Juan Pérez</h3>
        </div>

        {/* Información del empleado */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            width: '100%',
          }}
        >
          <h5
            style={{
              backgroundColor: '#c1d9d4',
              color: '#2f3e55',
              padding: '10px 20px',
              borderRadius: '5px',
              marginBottom: '10px',
              textAlign: 'center',
              display: 'inline-block',
            }}
          >
            Información del empleado
          </h5>
          <div className="row text-start">
            <div className="col-md-3 text-end">
              <p><strong>Empleado:</strong></p>
              <p><strong>DUI:</strong></p>
              <p><strong>Tipo de Contrato:</strong></p>
              <p><strong>Sueldo Base:</strong></p>
              <p><strong>Sueldo por cargos adicionales:</strong></p>
            </div>
            <div className="col-md-9">
              <p>Juan Pérez</p>
              <p>12345678-9</p>
              <p>Indefinido</p>
              <p>$1,000.00</p>
              <p>$350.00</p>
            </div>
          </div>
        </div>

        {/* Información de la planilla */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            width: '100%',
          }}
        >
          <h5
            style={{
              backgroundColor: '#c1d9d4',
              color: '#2f3e55',
              padding: '10px 20px',
              borderRadius: '5px',
              marginBottom: '10px',
              textAlign: 'center',
              display: 'inline-block',
            }}
          >
            Información de la planilla
          </h5>
          <div className="row px-5">
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Mes:</label>
              <p>Octubre</p>
            </div>
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Año:</label>
              <p>2024</p>
            </div>
            <hr />
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Bono:</label>
              <p>$100.00</p>
            </div>
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Días Laborados:</label>
              <p>20</p>
            </div>
            <hr />
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Horas Extras:</label>
              <p>5</p>
            </div>
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Descuentos Extra:</label>
              <p>$50.00</p>
            </div>
            <hr />
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Salario Proporcional:</label>
              <p>$900.00</p>
            </div>
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>ISSS:</label>
              <p>$30.00</p>
            </div>
            <hr />
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>AFP:</label>
              <p>$40.00</p>
            </div>
            <div className="col-md-6">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>ISR:</label>
              <p>$20.00</p>
            </div>
            <hr />
            <div className="col-md-12">
              <label style={{ fontWeight: 'bold', color: '#2f3e55' }}>Salario Líquido:</label>
              <p>$810.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanillaDetalle;
