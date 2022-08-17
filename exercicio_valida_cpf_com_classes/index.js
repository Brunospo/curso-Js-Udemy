class ValidaCpf {
    constructor(cpf) {
        this.cpfLimpo = cpf.replace(/\D+/g, '')
    }

    validar() {
        if (typeof this.cpfLimpo === 'undefined') {
            return false
        }

        if (this.cpfLimpo.length !== 11) {
            return false
        }

        if (this.isSequencia()) {
            return false
        }

        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.gerarDigito(cpfParcial)
        const digito2 = this.gerarDigito(cpfParcial + digito1)

        const novoCpf = cpfParcial + digito1 + digito2

        return this.cpfLimpo === novoCpf
    }

    gerarDigito(cpfParcial) {
        let contador = cpfParcial.length + 1
        const cpfArray = cpfParcial.split('')

        const total = cpfArray.reduce((acumulador, valorAtual) => {
            acumulador += (Number(valorAtual) * contador)
            contador--
            return acumulador
        }, 0)

        let digito = 11 - (total % 11)

        return digito = digito > 9 ? '0' : String(digito)
    }

    isSequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
}

const cpf = new ValidaCpf('705.484.450-52')

if (cpf.validar()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}