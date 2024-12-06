import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "@/styles/components/inputs.module.scss";
import Buttons from "./Buttons";
import Image from "next/image";
export default function Filedrop() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Dropped files:", acceptedFiles);
    // 여기에 파일 처리 로직을 추가
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [uploadStatus, setUploadStatus] = useState("error");
  return (
    <div className={styles.filedrop_root}>
      <div {...getRootProps()} className={`${styles.filedrop} ${isDragActive ? styles.active : null}`}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>파일을 놓아주세요</p>
        ) : (
          <>
            {uploadStatus == null && (
              <div className={styles[uploadStatus]}>
                <span>
                  <p>업로드할 파일을 이곳에 드래그 또는</p>
                  <p>“파일 선택” 버튼을 클릭하여 직접 선택해주세요.</p>
                </span>
                <Buttons img1={`/icons/plus.svg`} color="default" size="small" text="파일 선택" />
              </div>
            )}
            {uploadStatus == "success" && (
              <div className={styles[uploadStatus]}>
                <span>
                  <Image src={`/icons/inputs/input_check_circle.svg`} alt="" width={20} height={20} />
                  <p>업로드 완료</p>
                </span>
              </div>
            )}
            {uploadStatus == "error" && (
              <div className={styles[uploadStatus]}>
                <span>
                  <Image src={`/icons/inputs/input_error.svg`} alt="" width={20} height={20} />
                  <p>업로드 실패</p>
                </span>
                <Buttons color="default" size="small" text="다시 시도" />
              </div>
            )}
          </>
        )}
      </div>
      <div className={styles.notice}>
        <span>지원 형식 파일명</span>
        <span>최대 업로드 크기 파일크기</span>
      </div>
    </div>
  );
}
