import { useState } from "react";
import "./App.css";

function validarEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function validarCpf(cpf: string) {
  return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(cpf);
}

function validarCelular(celular: string) {
  return /^(\d{2}\s?)?\d{5}-?\d{4}$/.test(celular);
}

function validarCep(cep: string) {
  return /^\d{5}-?\d{3}$/.test(cep);
}

function validarEndereco(endereco: string) {
  return endereco.trim().length >= 5;
}

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    cep: "",
    endereco: "",
    senha: "",
    confirmarSenha: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório.";
    if (!formData.email) newErrors.email = "E-mail é obrigatório.";
    else if (!validarEmail(formData.email)) newErrors.email = "E-mail inválido.";
    if (!formData.cpf) newErrors.cpf = "CPF é obrigatório.";
    else if (!validarCpf(formData.cpf)) newErrors.cpf = "CPF inválido.";
    if (!formData.celular) newErrors.celular = "Celular é obrigatório.";
    else if (!validarCelular(formData.celular)) newErrors.celular = "Celular inválido.";
    if (!formData.cep) newErrors.cep = "CEP é obrigatório.";
    else if (!validarCep(formData.cep)) newErrors.cep = "CEP inválido.";
    if (!formData.endereco) newErrors.endereco = "Endereço é obrigatório.";
    else if (!validarEndereco(formData.endereco)) newErrors.endereco = "Endereço inválido.";
    if (!formData.senha) newErrors.senha = "Senha é obrigatória.";
    else if (formData.senha.length < 6) newErrors.senha = "Mínimo 6 caracteres.";
    if (formData.confirmarSenha !== formData.senha)
      newErrors.confirmarSenha = "As senhas não coincidem.";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }
    setSuccess(true);
    setErrors({});
    console.log("Dados enviados:", formData);
  }

  return (
    <div className="container" role="main">
      <h1 tabIndex={0}>Cadastro</h1>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-group">
        <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
            aria-invalid={!!errors.nome}
            aria-describedby="nome-erro"
            autoComplete="name"
          />
          {errors.nome && (
            <span className="erro" id="nome-erro" role="alert">
              {errors.nome}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            aria-invalid={!!errors.email}
            aria-describedby="email-erro"
            autoComplete="email"
          />
          {errors.email && (
            <span className="erro" id="email-erro" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            type="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="Digite seu CPF"
            aria-invalid={!!errors.cpf}
            aria-describedby="cpf-erro"
            autoComplete="cpf"
          />
          {errors.cpf && (
            <span className="erro" id="cpf-erro" role="alert">
              {errors.cpf}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="celular">Celular:</label>
          <input
            id="celular"
            type="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            placeholder="Digite seu celular"
            aria-invalid={!!errors.celular}
            aria-describedby="celular-erro"
            autoComplete="celular"
          />
          {errors.celular && (
            <span className="erro" id="celular-erro" role="alert">
              {errors.celular}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input
            id="cep"
            type="cep"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            placeholder="Digite seu CEP"
            aria-invalid={!!errors.cep}
            aria-describedby="cep-erro"
            autoComplete="cep"
          />
          {errors.cep && (
            <span className="erro" id="cep-erro" role="alert">
              {errors.cep}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            id="endereco"
            type="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Digite seu Endereço"
            aria-invalid={!!errors.endereco}
            aria-describedby="endereco-erro"
            autoComplete="endereco"
          />
          {errors.endereco && (
            <span className="erro" id="endereco-erro" role="alert">
              {errors.endereco}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
            aria-invalid={!!errors.senha}
            aria-describedby="senha-erro"
            autoComplete="new-password"
          />
          {errors.senha && (
            <span className="erro" id="senha-erro" role="alert">
              {errors.senha}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirmar senha:</label>
          <input
            id="confirmarSenha"
            type="password"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            placeholder="Confirme sua senha"
            aria-invalid={!!errors.confirmarSenha}
            aria-describedby="confirmarSenha-erro"
            autoComplete="new-password"
          />
          {errors.confirmarSenha && (
            <span className="erro" id="confirmarSenha-erro" role="alert">
              {errors.confirmarSenha}
            </span>
          )}
        </div>

        <button type="submit" className="btn">
          Cadastrar
        </button>
        {success && (
          <div className="sucesso" role="status" tabIndex={0}>
            Cadastro realizado com sucesso! 🎉
          </div>
        )}
      </form>
    </div>
  );
}

export default App;