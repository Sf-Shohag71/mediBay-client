/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
  return (
    <div className="container mx-auto my-10">
      <h4 className="text-5xl text-center font-bold my-10 mt-24">
        Frequently ask questions
      </h4>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a credential that represents the
            authorization granted to a client (such as a user or an application)
            to access specific resources. It is typically a short-lived token
            with an expiration time. Access tokens are issued by an
            authentication server (like OAuth or OpenID Connect) after the
            client successfully authenticates with valid credentials. The client
            includes the access token in each request to the server's protected
            resources to prove its authorization. The server validates the
            access token to ensure the client has the necessary permissions to
            access the requested resource. <br /> A refresh token
            is a credential used to obtain a new access token without requiring
            the client to reauthenticate. It is usually a long-lived token with
            a longer expiration time compared to the access token. Refresh
            tokens are securely stored by the client and sent to the
            authorization server to request a new access token once the current
            access token expires. The server verifies the refresh token's
            validity and issues a new access token, typically along with a new
            refresh token. Refresh tokens are particularly useful for extending
            the user's session without requiring frequent re-authentication.
            Regarding storage on the client-side, it's essential to follow
            security best practices to protect access and refresh tokens.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases define and manipulate data-based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice, especially for great complex
            queries. But from another side, it can be restrictive. SQL requires
            you to use predefined schemas to determine the structure of your
            data before you work with it. Also, all of your data must follow the
            same structure. This can require significant up-front preparation
            which means that a change in the structure would be both difficult
            and disruptive to your whole system. A NoSQL database has a dynamic
            schema for unstructured data. Data is stored in many ways which
            means it can be document-oriented, column-oriented, graph-based, or
            organized as a key-value store. This flexibility means that
            documents can be created without having a defined structure first.
            Also, each document can have its own unique structure. The syntax
            varies from database to database, and you can add fields as you go.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express and Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            <span className="text-xl font-bold">Express JS: </span>Express.js is
            a minimalist, unopinionated web framework for Node.js. It provides a
            set of lightweight and flexible features to build web applications
            and APIs. With Express.js, you have fine-grained control over how
            your application is structured and the middleware components you
            choose to use. <br />
            <span className="text-xl font-bold">Nest JS: </span>Nest.js is a
            progressive, opinionated framework for building efficient and
            scalable server-side applications. It is built on top of Express.js
            and leverages TypeScript as its primary language. Nest.js follows a
            modular, component-based architecture inspired by Angular. It
            promotes the use of decorators, dependency injection, and a module
            system to structure your application. <br />
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            In MongoDB, the aggregate method is a powerful tool for performing
            data aggregation operations on collections. It allows you to process
            and transform data using various stages and operators in a
            pipeline-like manner. The aggregate operation takes an array of
            stages as input, where each stage defines a specific operation or
            transformation on the data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
