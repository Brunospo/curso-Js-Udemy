function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype = {
    valida: function() {
        if (typeof this.cpfLimpo === 'undefined') {
            return false
        }

        if (this.cpfLimpo.length !== 11) {
            return false
        }

        if (this.isSequencia()){
            return false
        }

        const cpfParcial = this.cpfLimpo.slice(0, -2)

        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
        const novoCpf = cpfParcial + digito1 + digito2

        return novoCpf === this.cpfLimpo
    },

    criaDigito: function(cpfParcial) {
        let contador = cpfParcial.length + 1
    
        const cpfArray = cpfParcial.split('')        
        const total = cpfArray.reduce((acumulador, atual) => {
            acumulador += (contador * Number(atual))
            contador--
            return acumulador

        }, 0)
    
        let digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
        
    },

    isSequencia: function() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
}

const cpf = new ValidaCPF('705.484.450-52')

if (cpf.valida()){
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido');
}