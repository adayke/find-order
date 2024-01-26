import styles from "./Results.module.css";
import labelbox from "../../assets/labelbox.svg";
import labelmap from "../../assets/labelmap.svg";
import truck from "../../assets/truck.svg";
import shop from "../../assets/shop.svg";
import size from "../../assets/size.svg";
import tenge from "../../assets/mobile/tenge.svg";
import mobileTruck from "../../assets/mobile/mobile-truck.svg";
import arrowRightMobile from "../../assets/mobile/arrowRightMobile.svg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ResultsComponents() {
  return (
    <>
      <div className={styles.resultsContainer}>
        <div>
          <p style={{ fontWeight: 500 }}>№029</p>
          <p style={{ color: "#737474" }}>Сегодня в 7:00</p>
        </div>

        <div>
          <p>
            <img alt="img" src={labelbox} style={{ paddingRight: "10px" }} />
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              Астана, Казахстан
            </span>
            <span style={{ color: "#737474" }}>20 Марта</span>
          </p>
          <p>
            <img alt="img" src={labelmap} style={{ paddingRight: "10px" }} />
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              Шу, Казахстан
            </span>
            <span style={{ color: "#737474" }}>21 Марта</span>
          </p>
        </div>

        <div>
          <p>202 км</p>
        </div>

        <div style={{ display: "flex", fontSize: "16px" }}>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={truck} style={{ marginRight: "8px" }} />
            <p>Тент</p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={shop} style={{ marginRight: "8px" }} />
            <p>20 т</p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={size} style={{ marginRight: "8px" }} />
            <p>
              32 м<sup>3</sup>
            </p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>Фармацевтика</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <button
            style={{
              maxWidth: "100px",
              border: "1px solid #C5115E",
              padding: "10px",
              backgroundColor: "#C5115E",
              fontWeight: 500,
              borderRadius: "50px",
              color: "white",
            }}
          >
            Тендер
          </button>
          <p
            style={{
              padding: "0px",
              margin: "10px 0px 0px 0px ",
              color: "black",
            }}
          >
            Предложите свою цену
          </p>
        </div>
      </div>

      <div className={styles.resultsContainer}>
        <div>
          <p style={{ fontWeight: 500 }}>№029</p>
          <p style={{ color: "#737474" }}>Сегодня в 7:00</p>
        </div>

        <div>
          <p>
            <img alt="img" src={labelbox} style={{ paddingRight: "10px" }} />
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              Астана, Казахстан
            </span>
            <span style={{ color: "#737474" }}>20 Марта</span>
          </p>
          <p>
            <img alt="img" src={labelmap} style={{ paddingRight: "10px" }} />
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              Шу, Казахстан
            </span>
            <span style={{ color: "#737474" }}>21 Марта</span>
          </p>
        </div>

        <div>
          <p>202 км</p>
        </div>

        <div style={{ display: "flex", fontSize: "16px" }}>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={truck} style={{ marginRight: "8px" }} />
            <p>Тент</p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={shop} style={{ marginRight: "8px" }} />
            <p>20 т</p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={size} style={{ marginRight: "8px" }} />
            <p>
              32 м<sup>3</sup>
            </p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>Фармацевтика</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <button
            style={{
              maxWidth: "100px",
              border: "1px solid #FBC334",
              padding: "10px",
              backgroundColor: "#FBC334",
              fontWeight: 500,
              borderRadius: "50px",
              color: "black",
            }}
          >
            Аукцион
          </button>
          <p
            style={{
              padding: "0px",
              margin: "10px 0px 0px 0px ",
              color: "black",
            }}
          >
            Предложите свою цену
          </p>
        </div>
      </div>

      <div className={styles.resultsContainer}>
        <div>
          <p style={{ fontWeight: 500 }}>№029</p>
          <p style={{ color: "#737474" }}>Сегодня в 7:00</p>
        </div>

        <div>
          <p>
            <img alt="img" src={labelbox} style={{ paddingRight: "10px" }} />
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              Астана, Казахстан
            </span>
            <span style={{ color: "#737474" }}>20 Марта</span>
          </p>
          <p>
            <img alt="img" src={labelmap} style={{ paddingRight: "10px" }} />
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              Шу, Казахстан
            </span>
            <span style={{ color: "#737474" }}>21 Марта</span>
          </p>
        </div>

        <div>
          <p>202 км</p>
        </div>

        <div style={{ display: "flex", fontSize: "16px" }}>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={truck} style={{ marginRight: "8px" }} />
            <p>Тент</p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={shop} style={{ marginRight: "8px" }} />
            <p>20 т</p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            <img alt="img" src={size} style={{ marginRight: "8px" }} />
            <p>
              32 м<sup>3</sup>
            </p>
          </div>
          <div
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              border: "1px solid #ECEDEE",
              backgroundColor: "FAFAFA",
              padding: "5px 10px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p>Фармацевтика</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              maxWidth: "100px",
              fontWeight: 700,
              fontSize: "20px",
              color: "black",
              margin: "0px 0px 0px 0px",
              padding: "0px 10px 0px 0px",
            }}
          >
            180 010 ₸
          </p>
          <p
            style={{
              padding: "0px",
              margin: "10px 10px 0px 10px ",
              color: "#737474",
            }}
          >
            891 ₸ / км
          </p>
        </div>
      </div>

      <div className={styles.mobileOrdersList}>
        <div className={styles.mobileOrder}>
          <div className={styles.firstOrderBlock}>
            <div className={styles.firstOrderBlockInner}>
              <div className={styles.firstOrderBlockInnerAmount}>
                <img alt="img" src={tenge} style={{ marginRight: "5px" }} /> 856
                000
              </div>

              <div className={styles.firstOrderBlockInnerTruck}>
                <img
                  alt="img"
                  src={mobileTruck}
                  style={{ marginRight: "5px" }}
                />{" "}
                Реф
              </div>
            </div>

            <div>
              <span>№ 029</span>
            </div>
          </div>

          <hr />

          <div className={styles.secondOrderBlock}>
            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelbox} />
              </div>
              <div>
                <div>Усть-каменогорск</div>
                <div>20 марта</div>
              </div>
            </div>

            <div>
              <img alt="img" src={arrowRightMobile} />
            </div>

            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelmap} />
              </div>

              <div>
                <div>Алматы</div>
                <div>20 Марта</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileOrder}>
          <div className={styles.firstOrderBlock}>
            <div className={styles.firstOrderBlockInner}>
              <div className={styles.firstOrderBlockInnerAmount}>
                <img alt="img" src={tenge} style={{ marginRight: "5px" }} /> 856
                000
              </div>

              <div className={styles.firstOrderBlockInnerTruck}>
                <img
                  alt="img"
                  src={mobileTruck}
                  style={{ marginRight: "5px" }}
                />{" "}
                Реф
              </div>
            </div>

            <div>
              <span>№ 029</span>
            </div>
          </div>

          <hr />

          <div className={styles.secondOrderBlock}>
            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelbox} />
              </div>
              <div>
                <div>Усть-каменогорск</div>
                <div>20 марта</div>
              </div>
            </div>

            <div>
              <img alt="img" src={arrowRightMobile} />
            </div>

            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelmap} />
              </div>

              <div>
                <div>Алматы</div>
                <div>20 Марта</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileOrder}>
          <div className={styles.firstOrderBlock}>
            <div className={styles.firstOrderBlockInner}>
              <div className={styles.firstOrderBlockInnerAmount}>
                <img alt="img" src={tenge} style={{ marginRight: "5px" }} /> 856
                000
              </div>

              <div className={styles.firstOrderBlockInnerTruck}>
                <img
                  alt="img"
                  src={mobileTruck}
                  style={{ marginRight: "5px" }}
                />{" "}
                Реф
              </div>
            </div>

            <div>
              <span>№ 029</span>
            </div>
          </div>

          <hr />

          <div className={styles.secondOrderBlock}>
            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelbox} />
              </div>
              <div>
                <div>Усть-каменогорск</div>
                <div>20 марта</div>
              </div>
            </div>

            <div>
              <img alt="img" src={arrowRightMobile} />
            </div>

            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelmap} />
              </div>

              <div>
                <div>Алматы</div>
                <div>20 Марта</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileOrder}>
          <div className={styles.firstOrderBlock}>
            <div className={styles.firstOrderBlockInner}>
              <div className={styles.firstOrderBlockInnerAmount}>
                <img alt="img" src={tenge} style={{ marginRight: "5px" }} /> 856
                000
              </div>

              <div className={styles.firstOrderBlockInnerTruck}>
                <img
                  alt="img"
                  src={mobileTruck}
                  style={{ marginRight: "5px" }}
                />{" "}
                Реф
              </div>
            </div>

            <div>
              <span>№ 029</span>
            </div>
          </div>

          <hr />

          <div className={styles.secondOrderBlock}>
            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelbox} />
              </div>
              <div>
                <div>Усть-каменогорск</div>
                <div>20 марта</div>
              </div>
            </div>

            <div>
              <img alt="img" src={arrowRightMobile} />
            </div>

            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelmap} />
              </div>

              <div>
                <div>Алматы</div>
                <div>20 Марта</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileOrder}>
          <div className={styles.firstOrderBlock}>
            <div className={styles.firstOrderBlockInner}>
              <div className={styles.firstOrderBlockInnerAmount}>
                <img alt="img" src={tenge} style={{ marginRight: "5px" }} /> 856
                000
              </div>

              <div className={styles.firstOrderBlockInnerTruck}>
                <img
                  alt="img"
                  src={mobileTruck}
                  style={{ marginRight: "5px" }}
                />{" "}
                Реф
              </div>
            </div>

            <div>
              <span>№ 029</span>
            </div>
          </div>

          <hr />

          <div className={styles.secondOrderBlock}>
            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelbox} />
              </div>
              <div>
                <div>Усть-каменогорск</div>
                <div>20 марта</div>
              </div>
            </div>

            <div>
              <img alt="img" src={arrowRightMobile} />
            </div>

            <div className={styles.secondOrderBlockInner}>
              <div style={{ marginRight: "10px" }}>
                <img alt="img" src={labelmap} />
              </div>

              <div>
                <div>Алматы</div>
                <div>20 Марта</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.paginationResult}>
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </>
  );
}

export default ResultsComponents;
