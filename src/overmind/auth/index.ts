//INSTANCIANDO UNA MAQUINA
//Para usar la máquina como parte de su estado necesita crearla
import {auth} from './state';
import * as actions from './actions';

const config = {
  state: auth.create({
    current: 'AUTENTICANDO',
  }),
  actions,
};

export default config;
