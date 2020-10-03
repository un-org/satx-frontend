const URL = "http://localhost:5000/graphql";

const GraphQLService = {
    querySatellites: function() {
        const query = `
            query {
                Satellites {
                    id
                }
            }
        `;

        return fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        })
            .then((res) => res.json())
            .catch(console.error);
    },
};

export default GraphQLService;
