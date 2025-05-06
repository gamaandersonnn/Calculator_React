import './App.css';
import React, { useState } from 'react';
// Clicar nos botoes da calculadora e ver o resultado na tela
// Somar o que está na tela e mostrar o resultado após clicar no botão de igual

function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput(prev => (prev));
      } catch (error) {
        setResult('Erro na expressão');
        setInput('');
      }
    }
    else if (value === 'c') {
      setInput('');
      setResult('');
    }
    else if (value === 'del') {
      setInput((prev) => prev.slice(0, -1));
    }
    else {
      setInput((prev) => (prev + value))
    }
  }



  return (
    <>
      <div className='Title'><h1>Calculadora em React</h1></div>
      <div className="App">
        <div className='Calculator'>
          <div className='Display'>
            <input type="text" readOnly value={input} placeholder='0'/>
            <input type="text" readOnly value={result} placeholder="" />
          </div>
          <div className='Buttons'>

            <div className='ButtonLine'>
              <button className='ButtonC' onClick={() => handleButtonClick('c')}>C</button>
              <button className='ButtonD' onClick={() => handleButtonClick('del')}>Del</button>
              {['/'].map((item) => (
                <button className='ButtonD' onClick={() => handleButtonClick(item)}>
                  /
                </button>))}
            </div>

            <div className='ButtonLine'>
              {['7'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  7
                </button>))}
              {['8'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  8
                </button>))}
              {['9'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  9
                </button>))}
              {['*'].map((item) => (
                <button className='ButtonE' onClick={() => handleButtonClick(item)}>
                  *
                </button>))}
            </div>

            <div className='ButtonLine'>
              {['4'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  4
                </button>))}
              {['5'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  5
                </button>))}
              {['6'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  6
                </button>))}
              {['-'].map((item) => (
                <button className='ButtonE' onClick={() => handleButtonClick(item)}>
                  -
                </button>))}
            </div>

            <div className='ButtonLine'>
              {['1'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  1
                </button>))}
              {['2'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  2
                </button>))}
              {['3'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  3
                </button>))}
              <button className='ButtonE' onClick={() => handleButtonClick('+')}>+</button>
            </div>

            <div className='ButtonLine'>
              <button className='Button0' onClick={() => handleButtonClick('0')}>0</button>
              {['.'].map((item) => (
                <button className='Button' onClick={() => handleButtonClick(item)}>
                  .
                </button>))}
              <button className='ButtonE' onClick={() => handleButtonClick('=')}>=</button>
            </div>

          </div>
        </div>
      </div>
      <footer className='Footer'>
        <p>Desenvolvido por Gama, Anderson</p>
      </footer>
    </>
  );
}

export default App;
