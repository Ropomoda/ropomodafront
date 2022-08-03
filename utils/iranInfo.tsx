import cities from './cities.json';
import provinces from './provinces.json';
import * as R from 'ramda';

export const getProvinces = () => {
    return provinces;
}
export const getCities = (id) => {
    return R.filter(R.propEq("province_id", id), cities);
}
