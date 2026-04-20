import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 实习经历 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>品牌创意设计实习生</h4>
                <h5>深圳智若科技股份有限公司</h5>
              </div>
              <h3>2025.01-2025.04</h3>
            </div>
            <p>
              主导5款新品全链路视觉设计，覆盖亚马逊、独立站等渠道；为Sam's Club、Costco等零售商策划线下陈列方案，应用于1000+门店；参与CES/IFA国际展会主视觉创意。
            </p>
          </div>

          {/* 实习经历 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3D场景设计实习生</h4>
                <h5>武汉道奇数字科技有限公司</h5>
              </div>
              <h3>2023.06-2023.09</h3>
            </div>
            <p>
              参与《阴阳师》等游戏PV项目，负责角色场景建模与动画设计；使用Maya、3ds Max完成建模、绑定、渲染全流程；协同策划、后期推进项目按时交付。
            </p>
          </div>

          {/* 项目经历 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>山姆会员店多产品线展架统筹项目</h4>
                <h5>创意设计师</h5>
              </div>
              <h3>2025.02-2025.03</h3>
            </div>
            <p>
              统筹4款新品在美国600家门店的展架上新，建立标准化Brief框架与时间表，确保100%按时上市，实现零重大售后问题。
            </p>
          </div>

          {/* 项目经历 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IFA 2025国际展会主视觉创意提案</h4>
                <h5>创意设计师</h5>
              </div>
              <h3>2024.12-2025.04</h3>
            </div>
            <p>
              提出4个视觉概念并设计主KV及延展方案，方案获采纳，支撑品牌在国际级展会上的专业形象曝光。
            </p>
          </div>

          {/* 校园经历 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>团支部书记</h4>
                <h5>武汉工程大学</h5>
              </div>
              <h3>2023.09-2024.06</h3>
            </div>
            <p>
              组织班级团建活动，带领团支部获院风采大赛二等奖，有效提升班级凝聚力。
            </p>
          </div>

          {/* 校园经历 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>校教学信息中心文宣部 副部长</h4>
                <h5>武汉工程大学</h5>
              </div>
              <h3>2022.10-2024.09</h3>
            </div>
            <p>
              负责新媒体账号运营，累计输出20+篇文章，单篇最高阅读量1000+；通过数据分析优化内容，提升公众号活跃度同比23%。
            </p>
          </div>

          {/* 校园经历 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>视创部 平面组</h4>
                <h5>武汉工程大学</h5>
              </div>
              <h3>2022.09-2024.10</h3>
            </div>
            <p>
              领导30+人设计团队，统筹社团文化节、五四青年节、毕业晚会等10+场校级活动主视觉及物料设计，单场活动参与超1000人；建立标准化流程与成员培训体系，累计输出作品20+件。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;