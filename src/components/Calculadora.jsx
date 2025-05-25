import React from "react";
import "./Calculadora.css"

export default function Calculadora() {

    return (
        <div className="corpo-componente">

            <div className="corpo-calculadora">

                <div className="div-resultado">
                    <div>
                        <h2 id="resultAnterior">2938</h2>
                    </div>

                    <div>
                        <h1 id="resultAtual">12390</h1>
                    </div>
                </div>

                <div className="secao-botoes">
                    <button className="botao-limparCalcular" id="limpar">Limpar</button>
                    <button className="botao-op" id="%">
                        %
                    </button>
                    <button className="botao-op" id="/">/</button>
                </div>

                <div className="secao-botoes">
                    <button className="botao-num" id="7">7</button>
                    <button className="botao-num" id="8">8</button>
                    <button className="botao-num" id="9">9</button>
                    <button className="botao-op" id="x">
                        x
                    </button>
                </div>

                <div class="secao-botoes">
                    <button className="botao-num" id="4">4</button>
                    <button className="botao-num" id="5">5</button>
                    <button className="botao-num" id="6">6</button>
                    <button className="botao-op" id="subtracao">
                        -
                    </button>
                </div>

                <div className="secao-botoes">
                    <button className="botao-num" id="1">1</button>
                    <button className="botao-num" id="2">2</button>
                    <button className="botao-num" id="3">3</button>
                    <button className="botao-op" id="soma">
                        +
                    </button>
                </div>

                <div className="secao-botoes">
                    <button className="botao-num" id="0">0</button>
                    <button className="botao-num" id="ponto">,</button>
                    <button className="botao-limparCalcular">Calcular</button>
                </div>
            </div>
        </div>
    )
}