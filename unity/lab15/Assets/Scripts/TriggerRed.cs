using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerRed : MonoBehaviour
{

    public Light redLigth;

    void Start() { }

    void Update() { }

    private void OnTriggerEnter(Collider col)
    {
        if (col.tag == "tank")
        {
            redLigth.intensity = 100;
        }
    }
    private void OnTriggerExit(Collider col)
    {
        if (col.tag == "tank")
        {
            redLigth.intensity = 0;
        }
    }
}
