function createSecretHolder(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(value) {
      secret = value;
    },
  };
}
