import { LoadingIcon } from "../sniffers/LoadingIcon";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ExecutionRow } from "./ExecutionRow";
import { useNavigate, useParams } from "react-router-dom";
import { useFlowStore } from "../../stores/flowStore";
import { useEffect, useState } from "react";
import { GoBackButton } from "./FlowStepPage";
import { NodeRunType } from "../../stores/flowStore";

export const FlowRunPage = () => {
  const { loadNodeRuns, isRunLoading } = useFlowStore();
  const { runId, flowId } = useParams();
  const [nodeRuns, setNodeRuns] = useState<NodeRunType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!flowId || !runId) return;
    loadNodeRuns(flowId, runId, true).then((run) => {
      setNodeRuns(run);
    });
  }, [flowId, runId]);

  if (!nodeRuns) return null;

  return (
    <div className="flex flex-col p-4 space-y-2">
      <GoBackButton onClick={() => navigate(-1)} />
      <TableContainer className="border-[1px] border-primary rounded-lg">
        <Table>
          <TableHead>
            <TableRow className="bg-secondary">
              <TableCell style={{ borderBottom: "none" }}>
                {nodeRuns.length} executions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isRunLoading && (
              <TableRow>
                <TableCell>
                  <div className="flex flex-row items-center justify-center">
                    <LoadingIcon />
                  </div>
                </TableCell>
              </TableRow>
            )}
            {nodeRuns.map((run) => {
              return <ExecutionRow key={run.id} nodeRun={run} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
