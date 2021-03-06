import React from 'react';
import ReactDOM from 'react-dom';
import PieChart from './pie';
import { VictoryLegend, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryTooltip } from 'victory';

const thedata = [
  {
    "Rank": 1,
    "Major_code": 2419,
    "Major": "PETROLEUM ENGINEERING",
    "Major_category": "Engineering",
    "Total": 2339,
    "Men": 2057,
    "Women": 282,
    "ShareWomen": 0.120564344,
    "Median": 110000
  },
  {
    "Rank": 2,
    "Major_code": 2416,
    "Major": "MINING AND MINERAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 756,
    "Men": 679,
    "Women": 77,
    "ShareWomen": 0.101851852,
    "Median": 75000
  },
  {
    "Rank": 3,
    "Major_code": 2415,
    "Major": "METALLURGICAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 856,
    "Men": 725,
    "Women": 131,
    "ShareWomen": 0.153037383,
    "Median": 73000
  },
  {
    "Rank": 4,
    "Major_code": 2417,
    "Major": "NAVAL ARCHITECTURE AND MARINE ENGINEERING",
    "Major_category": "Engineering",
    "Total": 1258,
    "Men": 1123,
    "Women": 135,
    "ShareWomen": 0.107313196,
    "Median": 70000
  },
  {
    "Rank": 5,
    "Major_code": 2418,
    "Major": "NUCLEAR ENGINEERING",
    "Major_category": "Engineering",
    "Total": 2573,
    "Men": 2200,
    "Women": 373,
    "ShareWomen": 0.144966965,
    "Median": 65000
  },
  {
    "Rank": 6,
    "Major_code": 2405,
    "Major": "CHEMICAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 32260,
    "Men": 21239,
    "Women": 11021,
    "ShareWomen": 0.341630502,
    "Median": 65000
  },
  {
    "Rank": 7,
    "Major_code": 5001,
    "Major": "ASTRONOMY AND ASTROPHYSICS",
    "Major_category": "Physical Sciences",
    "Total": 1792,
    "Men": 832,
    "Women": 960,
    "ShareWomen": 0.535714286,
    "Median": 62000
  },
  {
    "Rank": 8,
    "Major_code": 2414,
    "Major": "MECHANICAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 91227,
    "Men": 80320,
    "Women": 10907,
    "ShareWomen": 0.119558903,
    "Median": 60000
  },
  {
    "Rank": 9,
    "Major_code": 2401,
    "Major": "AEROSPACE ENGINEERING",
    "Major_category": "Engineering",
    "Total": 15058,
    "Men": 12953,
    "Women": 2105,
    "ShareWomen": 0.139792801,
    "Median": 60000
  },
  {
    "Rank": 10,
    "Major_code": 2408,
    "Major": "ELECTRICAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 81527,
    "Men": 65511,
    "Women": 16016,
    "ShareWomen": 0.196450256,
    "Median": 60000
  },
  {
    "Rank": 11,
    "Major_code": 2407,
    "Major": "COMPUTER ENGINEERING",
    "Major_category": "Engineering",
    "Total": 41542,
    "Men": 33258,
    "Women": 8284,
    "ShareWomen": 0.199412643,
    "Median": 60000
  },
  {
    "Rank": 12,
    "Major_code": 5008,
    "Major": "MATERIALS SCIENCE",
    "Major_category": "Engineering",
    "Total": 4279,
    "Men": 2949,
    "Women": 1330,
    "ShareWomen": 0.310820285,
    "Median": 60000
  },
  {
    "Rank": 13,
    "Major_code": 2404,
    "Major": "BIOMEDICAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 14955,
    "Men": 8407,
    "Women": 6548,
    "ShareWomen": 0.437846874,
    "Median": 60000
  },
  {
    "Rank": 14,
    "Major_code": 2409,
    "Major": "ENGINEERING MECHANICS PHYSICS AND SCIENCE",
    "Major_category": "Engineering",
    "Total": 4321,
    "Men": 3526,
    "Women": 795,
    "ShareWomen": 0.183985189,
    "Median": 58000
  },
  {
    "Rank": 15,
    "Major_code": 2402,
    "Major": "BIOLOGICAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 8925,
    "Men": 6062,
    "Women": 2863,
    "ShareWomen": 0.320784314,
    "Median": 57100
  },
  {
    "Rank": 16,
    "Major_code": 2412,
    "Major": "INDUSTRIAL AND MANUFACTURING ENGINEERING",
    "Major_category": "Engineering",
    "Total": 18968,
    "Men": 12453,
    "Women": 6515,
    "ShareWomen": 0.343473218,
    "Median": 57000
  },
  {
    "Rank": 17,
    "Major_code": 2400,
    "Major": "GENERAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 61152,
    "Men": 45683,
    "Women": 15469,
    "ShareWomen": 0.252959838,
    "Median": 56000
  },
  {
    "Rank": 18,
    "Major_code": 2403,
    "Major": "ARCHITECTURAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 2825,
    "Men": 1835,
    "Women": 990,
    "ShareWomen": 0.350442478,
    "Median": 54000
  },
  {
    "Rank": 19,
    "Major_code": 2102,
    "Major": "COMPUTER SCIENCE",
    "Major_category": "Computers & Mathematics",
    "Total": 128319,
    "Men": 99743,
    "Women": 28576,
    "ShareWomen": 0.222695002,
    "Median": 53000
  },
  {
    "Rank": 20,
    "Major_code": 2502,
    "Major": "ELECTRICAL ENGINEERING TECHNOLOGY",
    "Major_category": "Engineering",
    "Total": 11565,
    "Men": 8181,
    "Women": 3384,
    "ShareWomen": 0.292607004,
    "Median": 52000
  },
  {
    "Rank": 21,
    "Major_code": 2413,
    "Major": "MATERIALS ENGINEERING AND MATERIALS SCIENCE",
    "Major_category": "Engineering",
    "Total": 2993,
    "Men": 2020,
    "Women": 973,
    "ShareWomen": 0.325091881,
    "Median": 52000
  },
  {
    "Rank": 22,
    "Major_code": 2499,
    "Major": "MISCELLANEOUS ENGINEERING",
    "Major_category": "Engineering",
    "Total": 9133,
    "Men": 7398,
    "Women": 1735,
    "ShareWomen": 0.189970437,
    "Median": 50000
  },
  {
    "Rank": 23,
    "Major_code": 2406,
    "Major": "CIVIL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 53153,
    "Men": 41081,
    "Women": 12072,
    "ShareWomen": 0.227117943,
    "Median": 50000
  },
  {
    "Rank": 24,
    "Major_code": 2500,
    "Major": "ENGINEERING TECHNOLOGIES",
    "Major_category": "Engineering",
    "Total": 3600,
    "Men": 2695,
    "Women": 905,
    "ShareWomen": 0.251388889,
    "Median": 50000
  },
  {
    "Rank": 25,
    "Major_code": 2411,
    "Major": "GEOLOGICAL AND GEOPHYSICAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 720,
    "Men": 488,
    "Women": 232,
    "ShareWomen": 0.322222222,
    "Median": 50000
  },
  {
    "Rank": 26,
    "Major_code": 2410,
    "Major": "ENVIRONMENTAL ENGINEERING",
    "Major_category": "Engineering",
    "Total": 4047,
    "Men": 2662,
    "Women": 1385,
    "ShareWomen": 0.342228811,
    "Median": 50000
  },
  {
    "Rank": 27,
    "Major_code": 6107,
    "Major": "NURSING",
    "Major_category": "Health",
    "Total": 209394,
    "Men": 21773,
    "Women": 187621,
    "ShareWomen": 0.896018988,
    "Median": 48000
  },
  {
    "Rank": 28,
    "Major_code": 2503,
    "Major": "INDUSTRIAL PRODUCTION TECHNOLOGIES",
    "Major_category": "Engineering",
    "Total": 4631,
    "Men": 3477,
    "Women": 1154,
    "ShareWomen": 0.24919024,
    "Median": 46000
  },
  {
    "Rank": 29,
    "Major_code": 5102,
    "Major": "NUCLEAR, INDUSTRIAL RADIOLOGY, AND BIOLOGICAL TECHNOLOGIES",
    "Major_category": "Physical Sciences",
    "Total": 2116,
    "Men": 528,
    "Women": 1588,
    "ShareWomen": 0.75047259,
    "Median": 46000
  },
  {
    "Rank": 30,
    "Major_code": 2105,
    "Major": "INFORMATION SCIENCES",
    "Major_category": "Computers & Mathematics",
    "Total": 11913,
    "Men": 9005,
    "Women": 2908,
    "ShareWomen": 0.244103081,
    "Median": 45000
  },
  {
    "Rank": 31,
    "Major_code": 2100,
    "Major": "COMPUTER AND INFORMATION SYSTEMS",
    "Major_category": "Computers & Mathematics",
    "Total": 36698,
    "Men": 27392,
    "Women": 9306,
    "ShareWomen": 0.253583302,
    "Median": 45000
  },
  {
    "Rank": 32,
    "Major_code": 5007,
    "Major": "PHYSICS",
    "Major_category": "Physical Sciences",
    "Total": 32142,
    "Men": 23080,
    "Women": 9062,
    "ShareWomen": 0.281936407,
    "Median": 45000
  },
  {
    "Rank": 33,
    "Major_code": 3701,
    "Major": "APPLIED MATHEMATICS",
    "Major_category": "Computers & Mathematics",
    "Total": 4939,
    "Men": 2794,
    "Women": 2145,
    "ShareWomen": 0.434298441,
    "Median": 45000
  },
  {
    "Rank": 34,
    "Major_code": 3700,
    "Major": "MATHEMATICS",
    "Major_category": "Computers & Mathematics",
    "Total": 72397,
    "Men": 39956,
    "Women": 32441,
    "ShareWomen": 0.448098678,
    "Median": 45000
  },
  {
    "Rank": 35,
    "Major_code": 3702,
    "Major": "STATISTICS AND DECISION SCIENCE",
    "Major_category": "Computers & Mathematics",
    "Total": 6251,
    "Men": 2960,
    "Women": 3291,
    "ShareWomen": 0.526475764,
    "Median": 45000
  },
  {
    "Rank": 36,
    "Major_code": 3607,
    "Major": "PHARMACOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 1762,
    "Men": 515,
    "Women": 1247,
    "ShareWomen": 0.707718502,
    "Median": 45000
  },
  {
    "Rank": 37,
    "Major_code": 6105,
    "Major": "MEDICAL TECHNOLOGIES TECHNICIANS",
    "Major_category": "Health",
    "Total": 15914,
    "Men": 3916,
    "Women": 11998,
    "ShareWomen": 0.75392736,
    "Median": 45000
  },
  {
    "Rank": 38,
    "Major_code": 5006,
    "Major": "OCEANOGRAPHY",
    "Major_category": "Physical Sciences",
    "Total": 2418,
    "Men": 752,
    "Women": 1666,
    "ShareWomen": 0.688999173,
    "Median": 44700
  },
  {
    "Rank": 39,
    "Major_code": 2501,
    "Major": "ENGINEERING AND INDUSTRIAL MANAGEMENT",
    "Major_category": "Engineering",
    "Total": 2906,
    "Men": 2400,
    "Women": 506,
    "ShareWomen": 0.174122505,
    "Median": 44000
  },
  {
    "Rank": 40,
    "Major_code": 4005,
    "Major": "MATHEMATICS AND COMPUTER SCIENCE",
    "Major_category": "Computers & Mathematics",
    "Total": 609,
    "Men": 500,
    "Women": 109,
    "ShareWomen": 0.178981938,
    "Median": 42000
  },
  {
    "Rank": 41,
    "Major_code": 6104,
    "Major": "MEDICAL ASSISTING SERVICES",
    "Major_category": "Health",
    "Total": 11123,
    "Men": 803,
    "Women": 10320,
    "ShareWomen": 0.927807246,
    "Median": 42000
  },
  {
    "Rank": 42,
    "Major_code": 2101,
    "Major": "COMPUTER PROGRAMMING AND DATA PROCESSING",
    "Major_category": "Computers & Mathematics",
    "Total": 4168,
    "Men": 3046,
    "Women": 1122,
    "ShareWomen": 0.269193858,
    "Median": 41300
  },
  {
    "Rank": 43,
    "Major_code": 4006,
    "Major": "COGNITIVE SCIENCE AND BIOPSYCHOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 3831,
    "Men": 1667,
    "Women": 2164,
    "ShareWomen": 0.56486557,
    "Median": 41000
  },
  {
    "Rank": 44,
    "Major_code": 2504,
    "Major": "MECHANICAL ENGINEERING RELATED TECHNOLOGIES",
    "Major_category": "Engineering",
    "Total": 4790,
    "Men": 4419,
    "Women": 371,
    "ShareWomen": 0.077453027,
    "Median": 40000
  },
  {
    "Rank": 45,
    "Major_code": 2599,
    "Major": "MISCELLANEOUS ENGINEERING TECHNOLOGIES",
    "Major_category": "Engineering",
    "Total": 8804,
    "Men": 7043,
    "Women": 1761,
    "ShareWomen": 0.200022717,
    "Median": 40000
  },
  {
    "Rank": 46,
    "Major_code": 5000,
    "Major": "PHYSICAL SCIENCES",
    "Major_category": "Physical Sciences",
    "Total": 1436,
    "Men": 894,
    "Women": 542,
    "ShareWomen": 0.377437326,
    "Median": 40000
  },
  {
    "Rank": 47,
    "Major_code": 1401,
    "Major": "ARCHITECTURE",
    "Major_category": "Engineering",
    "Total": 46420,
    "Men": 25463,
    "Women": 20957,
    "ShareWomen": 0.451464886,
    "Median": 40000
  },
  {
    "Rank": 48,
    "Major_code": 3605,
    "Major": "GENETICS",
    "Major_category": "Biology & Life Science",
    "Total": 3635,
    "Men": 1761,
    "Women": 1874,
    "ShareWomen": 0.515543329,
    "Median": 40000
  },
  {
    "Rank": 49,
    "Major_code": 3603,
    "Major": "MOLECULAR BIOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 18300,
    "Men": 7426,
    "Women": 10874,
    "ShareWomen": 0.59420765,
    "Median": 40000
  },
  {
    "Rank": 50,
    "Major_code": 6108,
    "Major": "PHARMACY PHARMACEUTICAL SCIENCES AND ADMINISTRATION",
    "Major_category": "Health",
    "Total": 23551,
    "Men": 8697,
    "Women": 14854,
    "ShareWomen": 0.630716318,
    "Median": 40000
  },
  {
    "Rank": 51,
    "Major_code": 5003,
    "Major": "CHEMISTRY",
    "Major_category": "Physical Sciences",
    "Total": 66530,
    "Men": 32923,
    "Women": 33607,
    "ShareWomen": 0.505140538,
    "Median": 39000
  },
  {
    "Rank": 52,
    "Major_code": 3606,
    "Major": "MICROBIOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 15232,
    "Men": 6383,
    "Women": 8849,
    "ShareWomen": 0.580948004,
    "Median": 38000
  },
  {
    "Rank": 53,
    "Major_code": 2106,
    "Major": "COMPUTER ADMINISTRATION MANAGEMENT AND SECURITY",
    "Major_category": "Computers & Mathematics",
    "Total": 8066,
    "Men": 6607,
    "Women": 1459,
    "ShareWomen": 0.180882718,
    "Median": 37500
  },
  {
    "Rank": 54,
    "Major_code": 3601,
    "Major": "BIOCHEMICAL SCIENCES",
    "Major_category": "Biology & Life Science",
    "Total": 39107,
    "Men": 18951,
    "Women": 20156,
    "ShareWomen": 0.515406449,
    "Median": 37400
  },
  {
    "Rank": 55,
    "Major_code": 3602,
    "Major": "BOTANY",
    "Major_category": "Biology & Life Science",
    "Total": 1329,
    "Men": 626,
    "Women": 703,
    "ShareWomen": 0.52896915,
    "Median": 37000
  },
  {
    "Rank": 56,
    "Major_code": 2107,
    "Major": "COMPUTER NETWORKING AND TELECOMMUNICATIONS",
    "Major_category": "Computers & Mathematics",
    "Total": 7613,
    "Men": 5291,
    "Women": 2322,
    "ShareWomen": 0.305004597,
    "Median": 36400
  },
  {
    "Rank": 57,
    "Major_code": 5004,
    "Major": "GEOLOGY AND EARTH SCIENCE",
    "Major_category": "Physical Sciences",
    "Total": 10972,
    "Men": 5813,
    "Women": 5159,
    "ShareWomen": 0.470196865,
    "Median": 36200
  },
  {
    "Rank": 58,
    "Major_code": 5005,
    "Major": "GEOSCIENCES",
    "Major_category": "Physical Sciences",
    "Total": 1978,
    "Men": 809,
    "Women": 1169,
    "ShareWomen": 0.591001011,
    "Median": 36000
  },
  {
    "Rank": 59,
    "Major_code": 6199,
    "Major": "MISCELLANEOUS HEALTH MEDICAL PROFESSIONS",
    "Major_category": "Health",
    "Total": 13386,
    "Men": 1589,
    "Women": 11797,
    "ShareWomen": 0.881293889,
    "Median": 36000
  },
  {
    "Rank": 60,
    "Major_code": 1301,
    "Major": "ENVIRONMENTAL SCIENCE",
    "Major_category": "Biology & Life Science",
    "Total": 25965,
    "Men": 10787,
    "Women": 15178,
    "ShareWomen": 0.584556133,
    "Median": 35600
  },
  {
    "Rank": 61,
    "Major_code": 5002,
    "Major": "ATMOSPHERIC SCIENCES AND METEOROLOGY",
    "Major_category": "Physical Sciences",
    "Total": 4043,
    "Men": 2744,
    "Women": 1299,
    "ShareWomen": 0.321296067,
    "Median": 35000
  },
  {
    "Rank": 62,
    "Major_code": 2001,
    "Major": "COMMUNICATION TECHNOLOGIES",
    "Major_category": "Computers & Mathematics",
    "Total": 18035,
    "Men": 11431,
    "Women": 6604,
    "ShareWomen": 0.366176878,
    "Median": 35000
  },
  {
    "Rank": 63,
    "Major_code": 5098,
    "Major": "MULTI-DISCIPLINARY OR GENERAL SCIENCE",
    "Major_category": "Physical Sciences",
    "Total": 62052,
    "Men": 27015,
    "Women": 35037,
    "ShareWomen": 0.564639335,
    "Median": 35000
  },
  {
    "Rank": 64,
    "Major_code": 3608,
    "Major": "PHYSIOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 22060,
    "Men": 8422,
    "Women": 13638,
    "ShareWomen": 0.618223028,
    "Median": 35000
  },
  {
    "Rank": 65,
    "Major_code": 3611,
    "Major": "NEUROSCIENCE",
    "Major_category": "Biology & Life Science",
    "Total": 13663,
    "Men": 4944,
    "Women": 8719,
    "ShareWomen": 0.63814682,
    "Median": 35000
  },
  {
    "Rank": 66,
    "Major_code": 6103,
    "Major": "HEALTH AND MEDICAL ADMINISTRATIVE SERVICES",
    "Major_category": "Health",
    "Total": 18109,
    "Men": 4266,
    "Women": 13843,
    "ShareWomen": 0.764426528,
    "Median": 35000
  },
  {
    "Rank": 67,
    "Major_code": 4002,
    "Major": "NUTRITION SCIENCES",
    "Major_category": "Health",
    "Total": 18909,
    "Men": 2563,
    "Women": 16346,
    "ShareWomen": 0.864456079,
    "Median": 35000
  },
  {
    "Rank": 68,
    "Major_code": 6110,
    "Major": "COMMUNITY AND PUBLIC HEALTH",
    "Major_category": "Health",
    "Total": 19735,
    "Men": 4103,
    "Women": 15632,
    "ShareWomen": 0.792095262,
    "Median": 34000
  },
  {
    "Rank": 69,
    "Major_code": 3699,
    "Major": "MISCELLANEOUS BIOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 10706,
    "Men": 4747,
    "Women": 5959,
    "ShareWomen": 0.556603774,
    "Median": 33500
  },
  {
    "Rank": 70,
    "Major_code": 6106,
    "Major": "HEALTH AND MEDICAL PREPARATORY PROGRAMS",
    "Major_category": "Health",
    "Total": 12740,
    "Men": 5521,
    "Women": 7219,
    "ShareWomen": 0.566640502,
    "Median": 33500
  },
  {
    "Rank": 71,
    "Major_code": 3600,
    "Major": "BIOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 280709,
    "Men": 111762,
    "Women": 168947,
    "ShareWomen": 0.601858152,
    "Median": 33400
  },
  {
    "Rank": 72,
    "Major_code": 3604,
    "Major": "ECOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 9154,
    "Men": 3878,
    "Women": 5276,
    "ShareWomen": 0.576360061,
    "Median": 33000
  },
  {
    "Rank": 73,
    "Major_code": 6109,
    "Major": "TREATMENT THERAPY PROFESSIONS",
    "Major_category": "Health",
    "Total": 48491,
    "Men": 13487,
    "Women": 35004,
    "ShareWomen": 0.721865913,
    "Median": 33000
  },
  {
    "Rank": 74,
    "Major_code": 6100,
    "Major": "GENERAL MEDICAL AND HEALTH SERVICES",
    "Major_category": "Health",
    "Total": 33599,
    "Men": 7574,
    "Women": 26025,
    "ShareWomen": 0.774576624,
    "Median": 32400
  },
  {
    "Rank": 75,
    "Major_code": 6102,
    "Major": "COMMUNICATION DISORDERS SCIENCES AND SERVICES",
    "Major_category": "Health",
    "Total": 38279,
    "Men": 1225,
    "Women": 37054,
    "ShareWomen": 0.967998119,
    "Median": 28000
  },
  {
    "Rank": 76,
    "Major_code": 3609,
    "Major": "ZOOLOGY",
    "Major_category": "Biology & Life Science",
    "Total": 8409,
    "Men": 3050,
    "Women": 5359,
    "ShareWomen": 0.637293376,
    "Median": 26000
  }
]


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Engineering'
    }
  }
  change(event) {
    console.log(event.target.value);
    this.setState({ category: event.target.value })
  }
  render() {
    return (
      <div style={{"background-color": "#88A2AA", "textAlign": "center", "color": "white"}}>
        <h1>Women in STEM Fields</h1>
        <PieChart />
        <h3 >choose a major category</h3>
        <select style= {{padding: 20}} id="majorCategory" onChange={this.change.bind(this)} value={this.state.category}>
          <option value="Engineering">Engineering</option>
          <option value="Physical Sciences">Physical Sciences</option>
          <option value="Computers &amp; Mathematics">Computers &amp; Mathematics</option>
          <option value="Health">Health</option>
          <option value="Biology &amp; Life Science">Biology &amp; Life Science</option>
        </select>
        <div style={{display: "flex", justifyContent: "center"}}>
        <VictoryChart
          theme={VictoryTheme.material} style={{ parent: { maxWidth: "50%" }, padding: 20 }}
          // domainPadding={20}
        >
        <VictoryAxis />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x / 1000}k`)}
          />
                  <VictoryLegend  x={250} title="Legend" style={{ padding: 40, border: { stroke: "black", padding: 50 }, title: {fontSize: 15 }}} centerTitle
        data={[
          { name: "Men", symbol: { fill: "yellow", type: "circle" } },
          { name: "Women", symbol: { fill: "red", type: "circle" } },
        ]}
/>
          <VictoryStack animate={{
  duration: 2000,
  onLoad: { duration: 1000 }
}}>
            <VictoryBar
          data={thedata.filter(d => d.Major_category === this.state.category)}
          x="Major"
              y="Women"
            />
            <VictoryBar
          data={thedata.filter(d => d.Major_category === this.state.category)}
          x="Major"
              y="Men"
            />
            
          </VictoryStack>
        </VictoryChart>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);