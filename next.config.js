/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [
            {
                source: '/', // Rota de login da sua API
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*', // Permitir acesso de todas as origens
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS', // Métodos permitidos
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-Requested-With, Content-Type, Authorization', // Cabeçalhos permitidos
                    },
                ],
            },
        ];
    },
};
