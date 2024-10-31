import { useEffect, useState } from "react";
import TimeZoneClock from "./components/TimeZoneClock";
function App() {
    const fusosHorarios = [
        "UTC",
        "GMT",
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "Europe/London",
        "Europe/Berlin",
        "Asia/Tokyo",
    ];

    const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [fusoHorarioSelecionado, setFusoHorarioSelecionado] = useState([
        fusoHorarioLocal,
    ]);

    const adicionarFusoHorario = (e) => {
        const novoFuso = e.target.value;
        if (!fusoHorarioSelecionado.includes(novoFuso)) {
            setFusoHorarioSelecionado([...fusoHorarioSelecionado, novoFuso]);
        }
    };

    return (
        <div>
            <h1>Relógio Mundial</h1>
            <select onChange={(e) => adicionarFusoHorario(e)}>
                <option value="" disabled select>
                    Selecione um fuso horário
                </option>
                {fusosHorarios.map((fuso) => (
                    <option value={fuso} key={fuso}>
                        {fuso}
                    </option>
                ))}
            </select>
            <div>
                {fusoHorarioSelecionado.map((fuso) => (
                    <TimeZoneClock key={fuso} timeZone={fuso} />
                ))}
            </div>
        </div>
    );
}

export default App;
