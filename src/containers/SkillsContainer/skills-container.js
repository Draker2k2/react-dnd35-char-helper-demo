import { connect } from 'react-redux';
import SkillsContainer from '../../components/Skills';
import { getData } from '../../actions/skills';

const mapStateToProps = state => ({
  skills: state.skills.skills,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
