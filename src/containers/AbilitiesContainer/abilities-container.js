import { connect } from 'react-redux';
import Abilities from '../../components/Abilities';
import { getData } from '../../actions/abilities';

const mapStateToProps = state => ({
  abilities: state.abilities.abilities,
  constitutionMod: state.abilities.conMod,
  dexterityMod: state.abilities.dexMod,
  strenghMod: state.abilities.strMod,
  wisdomMod: state.abilities.wisMod,
  intelligenceMod: state.abilities.intMod,
  charismaMod: state.abilities.chaMod,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  changeValueForLevelXX: (id, level) =>
    dispatch({ type: 'incrementValueForLevelXX', payload: { id, level } }),
  damageExtraStaticBonus: (checked, bonusType, value) =>
    dispatch({ type: 'DAMAGE_increase_static_bonus', payload: { checked, bonusType, value } }),
  skillsMods: (constitutionMod, dexterityMod, strenghMod,
      intelligenceMod, charismaMod, wisdomMod) =>
    dispatch({ type: 'SKILLS_calculate_mods',
      payload: { constitutionMod, dexterityMod, strenghMod, intelligenceMod, charismaMod, wisdomMod } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Abilities);
