// noinspection JSUnusedGlobalSymbols

import React from "react";
import Styles from "./styles.module.scss";
import Card from "../../../../components/Card/Card";

const Index: React.FunctionComponent = () => {
  return (
    <Card>
      <header className={Styles.header}>Download this study as a PDF</header>
      <form
        action="https://formspree.io/f/mvolwyny"
        method="POST"
        className={Styles.form}
      >
        <div className={Styles.row}>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              autoFocus
            />
          </label>
        </div>

        <div className={Styles.row}>
          <label>
            <input
              type="text"
              name="company-title"
              placeholder="Title"
              autoComplete="organization-title"
            />
          </label>
          <label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              autoComplete="organization"
            />
          </label>
        </div>

        <div className={Styles.row}>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
          </label>
        </div>

        <p className={Styles.legal}>
          By submitting this form, you consent to be contacted by a member of
          our team by email or phone. You can unsubscribe from our
          communications at any time via the unsubscribe option in the email
          received. For more information on how Torch.AI uses your data, please
          refer to our <a href="/privacypolicy">Privacy Policy</a>.
        </p>
        <button type="submit">Send</button>
      </form>
    </Card>
  );
};

export default Index;
