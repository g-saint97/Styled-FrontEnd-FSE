export const PRODUCT_QUERY = `
    query{
        product {
            data {
                attributes {
                    title
                    Description
                    Price
                    slug
                }
            }
        }
    }
`;