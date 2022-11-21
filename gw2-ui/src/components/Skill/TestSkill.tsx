import { useSkill } from '../../gw2api/hooks';
import { SkillProps } from './Skill';
import SkillInternal from './SkillInternal';

const TestSkill = (props: SkillProps & { name: string; id?: number }) => {
  const { name } = props;
  const { data } = useSkill(name);

  if (!data) {
    return null;
  }

  return <SkillInternal {...props} data={data} />;
};

export default TestSkill;
