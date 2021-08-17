describe('users API', () => {
    it.only('return a 200 status', () => {
        const email = "anas@gmail.com.br" // Substituir por email novo

        cy.request({ method: 'POST', url: '/users', headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "fullName": "Fernanda", 
            "password": "123456",
            "email": email,
            "loginType": "email"
        }
     }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('token')
        expect(response.body.user).to.have.property('email', email)
        expect(response).to.have.property('headers')
      })
    })


    it('return a 400 status when email registered', () => {
            
        cy.request({ method: 'POST', url: '/users', headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: {
            "fullName": "Fernanda",
            "password": "123456",
            "email": "teste@gmail.com.br",
            "loginType": "email"
        }
     })
     .then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.error).to.have.property('code', 'EMAIL_REGISTERED')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })

    })


    it('should return a 400 status when no fullname', () => {
            
        cy.request({ method: 'POST', url: '/users', headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: {
            "password": "12",
            "email": "teste@gmail.com.br",
            "loginType": "email"
        }
     })
     .then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.error).to.have.property('code', 'FULLNAME_REQUIRED')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })

    })


})