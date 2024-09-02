enum Enviroments {
  local_environment = 'local',
  dev_environment = 'dev',
  prod_environment = 'prod',
  qa_environment = 'qa',
}

export class Enviroment {
  private enviroment: string;

  constructor(enviroment: string) {
    this.enviroment = enviroment;
  }

  getPort(): number {
    if (this.enviroment === Enviroments.prod_environment) {
      return 8081;
    }
    if (this.enviroment === Enviroments.dev_environment) {
      return 8082;
    }

    if (this.enviroment === Enviroments.qa_environment) {
      return 8083;
    }
    return 8001;
  }
  getDbName(): string {
    if (this.enviroment === Enviroments.prod_environment) {
      return 'db_tescom_prod';
    }
    if (this.enviroment === Enviroments.dev_environment) {
      return 'db_tescom_dev';
    }
    if (this.enviroment === Enviroments.qa_environment) {
      return 'db_tescom_qa';
    }
    return 'db_tescom_local';
  }
}

export default new Enviroment(Enviroments.local_environment);
